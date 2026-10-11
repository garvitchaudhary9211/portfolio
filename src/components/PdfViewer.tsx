import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Download, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2, FileText, AlertCircle, RefreshCw } from 'lucide-react';

// Configure the worker source using local public worker
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfViewerProps {
  url: string;
  filename: string;
  title: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ url, filename, title }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [renderTaskRunning, setRenderTaskRunning] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    const loadDocument = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(url);
        const doc = await loadingTask.promise;
        if (!isCancelled) {
          setPdfDoc(doc);
          setTotalPages(doc.numPages);
          setCurrentPage(1);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (!isCancelled) {
          console.error('PDF.js loading error:', err);
          setError('Could not render document in canvas. You can still open or download the original file directly below.');
          setLoading(false);
        }
      }
    };

    loadDocument();

    return () => {
      isCancelled = true;
    };
  }, [url]);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let cancelRender = false;

    const renderPage = async () => {
      try {
        setRenderTaskRunning(true);
        const page = await pdfDoc.getPage(currentPage);
        if (cancelRender) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } catch (err) {
        console.error('Page render error:', err);
      } finally {
        setRenderTaskRunning(false);
      }
    };

    renderPage();

    return () => {
      cancelRender = true;
    };
  }, [pdfDoc, currentPage, scale]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.4));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6));
  };

  return (
    <div className="rounded-2xl bg-white border border-[#DCE8F5] shadow-sm overflow-hidden flex flex-col">
      {/* Top Toolbar */}
      <div className="p-3 sm:p-4 bg-[#F2F8FF] border-b border-[#DCE8F5] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100 text-[#2563EB]">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#142D4E] truncate max-w-[200px] sm:max-w-xs">
              {title}
            </h4>
            <span className="text-[11px] font-mono text-[#526579]">
              {filename}
            </span>
          </div>
        </div>

        {/* Page & Zoom Controls */}
        {totalPages > 0 && (
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className="p-1.5 rounded-lg border border-[#DCE8F5] bg-white text-[#142D4E] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Previous Page"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-semibold text-[#142D4E] px-2 whitespace-nowrap">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              className="p-1.5 rounded-lg border border-[#DCE8F5] bg-white text-[#142D4E] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Next Page"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="h-4 w-px bg-[#DCE8F5] mx-1 hidden sm:block" />

            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg border border-[#DCE8F5] bg-white text-[#526579] hover:text-[#142D4E] hover:bg-slate-50 transition-colors hidden sm:inline-flex"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-[#526579] hidden sm:inline-block w-10 text-center">
              {Math.round(scale * 100)}%
            </span>

            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg border border-[#DCE8F5] bg-white text-[#526579] hover:text-[#142D4E] hover:bg-slate-50 transition-colors hidden sm:inline-flex"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="hidden sm:inline">Open in Tab</span>
          </a>

          <a
            href={url}
            download={filename}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative min-h-[460px] max-h-[720px] bg-[#E8F1FA] overflow-auto flex items-center justify-center p-4">
        {loading && (
          <div className="flex flex-col items-center gap-3 text-slate-500 py-16">
            <Loader2 className="w-8 h-8 text-[#2563EB] animate-spin" />
            <p className="text-xs font-medium text-[#142D4E]">Loading document preview...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md p-6 rounded-xl bg-white border border-[#DCE8F5] text-center space-y-4 shadow-sm">
            <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-[#142D4E]">Preview Notice</h5>
              <p className="text-xs text-[#526579] leading-relaxed">{error}</p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold text-[#142D4E] bg-[#F2F8FF] hover:bg-blue-100 border border-[#DCE8F5] transition-colors inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Open Direct File</span>
              </a>
              <a
                href={url}
                download={filename}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className={`shadow-md rounded border border-[#DCE8F5] bg-white transition-opacity ${
            loading || error ? 'hidden' : 'block'
          }`}
        />
      </div>

      {/* Footer Details */}
      <div className="p-3 bg-white border-t border-[#DCE8F5] flex flex-wrap items-center justify-between text-[11px] text-[#526579] font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Verified Document Source: {url}</span>
        </span>
        <span>Rendered via HTML5 Canvas (No Iframe Blocking)</span>
      </div>
    </div>
  );
};
