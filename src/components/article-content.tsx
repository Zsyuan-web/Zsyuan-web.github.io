import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleContentProps {
  content: string;
  className?: string;
}

export function ArticleContent({ content, className }: ArticleContentProps) {
  return (
    <div className={className}>
      <div className="article-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
