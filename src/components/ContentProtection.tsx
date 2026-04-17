"use client";

import { useEffect, useState } from "react";

export default function ContentProtection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable cut
    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable paste
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drop
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for copy/save/inspect
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+C, Ctrl+X, Ctrl+V
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X' || e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S (Save)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }

      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I/J/C (DevTools shortcuts)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.key === 'j' || e.key === 'J' || e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection via CSS
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('copy', handleCopy, true);
    document.addEventListener('cut', handleCut, true);
    document.addEventListener('paste', handlePaste, true);
    document.addEventListener('dragstart', handleDragStart, true);
    document.addEventListener('drop', handleDrop, true);
    document.addEventListener('keydown', handleKeyDown, true);

    // Prevent developer tools detection bypass
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        console.clear();
      }
    };

    window.addEventListener('resize', detectDevTools);

    // Cleanup
    return () => {
      if (!mounted) return;
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('copy', handleCopy, true);
      document.removeEventListener('cut', handleCut, true);
      document.removeEventListener('paste', handlePaste, true);
      document.removeEventListener('dragstart', handleDragStart, true);
      document.removeEventListener('drop', handleDrop, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('resize', detectDevTools);
      
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      (document.body.style as any).mozUserSelect = '';
      (document.body.style as any).msUserSelect = '';
    };
  }, [mounted]);

  return null;
}
