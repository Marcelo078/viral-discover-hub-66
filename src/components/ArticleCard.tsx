import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Eye } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  readTime: string;
  views?: string;
}

const ArticleCard = ({ title, description, image, slug, category, readTime, views }: ArticleCardProps) => {
  return (
    <Link to={`/artigos/${slug}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
              {category}
            </span>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
            {views && (
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{views}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
