
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Share2, 
  Clock, 
  CheckCircle 
} from "lucide-react";

const Article = () => {
  const socialIcons = [
    { Icon: Facebook, label: "Share on Facebook" },
    { Icon: Twitter, label: "Share on Twitter" },
    { Icon: Linkedin, label: "Share on LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-article-background">
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Fixed Social Bar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8 space-y-4">
              {socialIcons.map(({ Icon, label }) => (
                <button
                  key={label}
                  className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-article-accent group-hover:scale-110 transition-transform duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="col-span-12 lg:col-span-8 animate-fade-in">
            <article className="prose max-w-none">
              <Badge className="mb-4 bg-article-accent/10 text-article-accent hover:bg-article-accent/20">
                Healthcare Technology
              </Badge>
              
              <h1 className="font-alegreya text-4xl md:text-5xl font-bold text-article-title mb-6 leading-tight">
                Machine Learning Revolutionizes Early Disease Detection in Healthcare
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-article-body mb-8">
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="Author avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <span className="font-medium text-article-title">Dr. Sarah Chen</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-article-accent" />
                      <span className="text-xs">Verified Expert</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </span>
                  <span>Updated: March 14, 2024</span>
                </div>
              </div>

              <div className="font-labrada leading-relaxed space-y-6 text-article-body">
                <p>
                  In a groundbreaking development, artificial intelligence and machine learning algorithms are transforming the landscape of early disease detection in healthcare systems worldwide. This technological revolution is not just improving diagnostic accuracy—it's fundamentally changing how medical professionals approach patient care.
                </p>

                <p>
                  Recent studies have shown that machine learning models can detect patterns in medical imaging that might be imperceptible to the human eye. These advances are particularly promising in oncology, where early detection can significantly impact patient outcomes.
                </p>

                <h2 className="font-alegreya text-2xl font-bold text-article-title mt-8 mb-4">
                  The Impact on Patient Care
                </h2>

                <p>
                  Healthcare providers implementing these AI-driven systems have reported a 40% improvement in early diagnosis rates. This technological integration has not only enhanced the accuracy of diagnoses but has also reduced the workload on medical professionals, allowing them to focus more on patient care and treatment planning.
                </p>

                <p>
                  Machine learning algorithms are particularly effective in:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyzing complex medical imaging data</li>
                  <li>Identifying subtle patterns in patient health records</li>
                  <li>Predicting potential health risks before they become severe</li>
                  <li>Optimizing treatment plans based on individual patient data</li>
                </ul>

                <h2 className="font-alegreya text-2xl font-bold text-article-title mt-8 mb-4">
                  Future Implications
                </h2>

                <p>
                  As these technologies continue to evolve, we can expect to see even more sophisticated applications in healthcare. The integration of machine learning with other emerging technologies like genomics and personalized medicine promises to usher in a new era of predictive and preventive healthcare.
                </p>
              </div>
            </article>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-8 space-y-8">
              {/* Social Share Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-article-border">
                <h3 className="font-alegreya text-lg font-bold text-article-title mb-4">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  {socialIcons.map(({ Icon, label }) => (
                    <button
                      key={label}
                      className="p-3 rounded-full bg-article-accent/10 hover:bg-article-accent/20 transition-all duration-300 group"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-article-accent group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Advertisement */}
              <div className="aspect-[3/4] bg-article-border rounded-lg overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/shapes/svg?seed=ad"
                  alt="Advertisement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Article;
