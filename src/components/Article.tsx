import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Share2, 
  Clock, 
  CheckCircle,
  Link2,
  Mail,
  Globe,
  Instagram,
  Copy,
  Printer
} from "lucide-react";

const Article = () => {
  const socialIcons = [
    { Icon: Facebook, label: "Compartir en Facebook" },
    { Icon: Twitter, label: "Compartir en Twitter" },
    { Icon: Linkedin, label: "Compartir en LinkedIn" },
  ];

  const authorSocialLinks = [
    { Icon: Globe, label: "Sitio web", href: "#" },
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  const shareOptions = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Mail, label: "Email" },
    { Icon: Copy, label: "Copiar enlace" },
    { Icon: Printer, label: "Imprimir" },
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
                Tecnología en Salud
              </Badge>
              
              <h1 className="font-alegreya text-4xl md:text-5xl font-black text-article-title mb-6 leading-tight">
                El Aprendizaje Automático Revoluciona la Detección Temprana de Enfermedades en el Sector Salud
              </h1>

              {/* Author and Social Share - Mobile/Tablet */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-article-body mb-8">
                <div className="flex items-center gap-2">
                  <img
                    src="/lovable-uploads/4f5f01d4-789b-4222-94e7-a593f72d2a77.png"
                    alt="Foto del autor"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <span className="font-medium text-article-title">JESÚS DAVID SILVA RANGEL</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-article-accent" />
                      <span className="text-xs">Ingeniero de Machine Learning</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min de lectura
                  </span>
                  <span>Actualizado: 14 de marzo de 2024</span>
                </div>
              </div>

              <div className="font-labrada leading-[1.1em] space-y-6 text-black">
                <p>
                  En un avance revolucionario, los algoritmos de inteligencia artificial y aprendizaje automático están transformando el panorama de la detección temprana de enfermedades en los sistemas de salud a nivel mundial. Esta revolución tecnológica no solo está mejorando la precisión diagnóstica, sino que está cambiando fundamentalmente la forma en que los profesionales médicos abordan la atención al paciente.
                </p>

                <p>
                  Estudios recientes han demostrado que los modelos de aprendizaje automático pueden detectar patrones en imágenes médicas que podrían ser imperceptibles para el ojo humano. Estos avances son particularmente prometedores en oncología, donde la detección temprana puede impactar significativamente en los resultados del paciente.
                </p>

                <h2 className="font-alegreya text-2xl font-black text-article-title mt-8 mb-4">
                  El Impacto en la Atención al Paciente
                </h2>

                <p>
                  Los proveedores de atención médica que implementan estos sistemas impulsados por IA han reportado una mejora del 40% en las tasas de diagnóstico temprano. Esta integración tecnológica no solo ha mejorado la precisión de los diagnósticos, sino que también ha reducido la carga de trabajo de los profesionales médicos, permitiéndoles enfocarse más en la atención al paciente y la planificación del tratamiento.
                </p>

                <p>
                  Los algoritmos de aprendizaje automático son particularmente efectivos en:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Analizar datos complejos de imágenes médicas</li>
                  <li>Identificar patrones sutiles en los registros de salud de los pacientes</li>
                  <li>Predecir riesgos potenciales para la salud antes de que se vuelvan graves</li>
                  <li>Optimizar planes de tratamiento basados en datos individuales del paciente</li>
                </ul>

                <h2 className="font-alegreya text-2xl font-black text-article-title mt-8 mb-4">
                  Implicaciones Futuras
                </h2>

                <p>
                  A medida que estas tecnologías continúan evolucionando, podemos esperar ver aplicaciones aún más sofisticadas en el cuidado de la salud. La integración del aprendizaje automático con otras tecnologías emergentes como la genómica y la medicina personalizada promete inaugurar una nueva era de atención médica predictiva y preventiva.
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-12 border-t border-b border-article-border py-6 font-poppins">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="font-semibold text-lg">Compartir Este Artículo</h3>
                  <div className="flex items-center gap-4">
                    {shareOptions.map(({ Icon, label }) => (
                      <button
                        key={label}
                        className="p-2 hover:bg-article-accent/10 rounded-full transition-colors"
                        aria-label={`Compartir por ${label}`}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-article-border/20 rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="/lovable-uploads/4f5f01d4-789b-4222-94e7-a593f72d2a77.png"
                    alt="Foto de JESÚS DAVID SILVA RANGEL"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1 font-poppins">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-xl">JESÚS DAVID SILVA RANGEL</h3>
                      <CheckCircle className="w-5 h-5 text-article-accent" />
                    </div>
                    <p className="text-sm text-article-body mb-4">
                      Ingeniero de Machine Learning especializado en el desarrollo de soluciones de IA para el sector salud. Ex investigador principal en The Health Institute, ahora lidera el equipo de innovación en Globe como Editor Senior de Tecnología. Apasionado por la intersección entre la inteligencia artificial y el cuidado de la salud.
                    </p>
                    <div className="flex gap-4">
                      {authorSocialLinks.map(({ Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="text-article-body hover:text-article-accent transition-colors"
                          aria-label={label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Article */}
              <div className="mt-12">
                <span className="text-sm font-poppins text-article-body uppercase tracking-wider">
                  ARTÍCULO ANTERIOR
                </span>
                <a href="#" className="block mt-4 group">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://api.dicebear.com/7.x/shapes/svg?seed=prev"
                      alt="Imagen del artículo anterior"
                      className="w-16 h-16 rounded object-cover"
                    />
                    <h4 className="font-alegreya text-xl font-bold group-hover:text-article-accent transition-colors">
                      La Innovación en Drones Evoluciona del Hardware al Software Autónomo
                    </h4>
                  </div>
                </a>
              </div>
            </article>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-8 space-y-8">
              {/* Social Share Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-article-border">
                <h3 className="font-alegreya text-lg font-bold text-article-title mb-4">
                  Compartir artículo
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
                  alt="Publicidad"
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
