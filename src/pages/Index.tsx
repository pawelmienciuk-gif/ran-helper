import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Phone, 
  MapPin, 
  User, 
  Heart, 
  Stethoscope,
  Award,
  GraduationCap,
  Brain,
  UserCheck,
  ChevronDown,
  Mail,
  Send,
  ExternalLink,
  Instagram
} from "lucide-react";
import { useState } from "react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";
import examinationRoom from "@/assets/examination-room.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import medicalEquipment from "@/assets/medical-equipment.jpg";

const Index = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showTreatmentDetails, setShowTreatmentDetails] = useState(false);

  const services = [
    { icon: Stethoscope, title: "Chirurgia Ogólna", description: "Kompleksowa opieka chirurgiczna z wieloletnim doświadczeniem" },
    { icon: Heart, title: "Odleżyny", description: "Specjalistyczne leczenie odleżyn z zastosowaniem nowoczesnych metod" },
    { icon: Heart, title: "Owrzodzenia żylne", description: "Leczenie trudno gojących się owrzodzeń z użyciem kompresjoterapii" },
    { icon: User, title: "Stopa cukrzycowa", description: "Kompleksowa terapia stopy cukrzycowej metodą Total Contact Cast" },
    { icon: Heart, title: "Kamica żółciowa", description: "Diagnostyka i leczenie chorób pęcherzyka żółciowego" },
    { icon: Heart, title: "Odparzenia", description: "Leczenie odparzeń z doborem specjalistycznych opatrunków" }
  ];

  const certificates = [
    "Specjalizacja w chirurgii ogólnej", "Terapia podciśnieniowa NPWT", "Metoda Total Contact Cast",
    "Kompresjoterapia", "Larwoterapia", "Przeszczepy skóry", "Leczenie ran przewlekłych",
    "Opatrunki specjalistyczne", "Diagnostyka ran", "Mikrobiologia ran", "Żywienie kliniczne",
    "Kontrola zakażeń", "Ultrasonografia", "Dermatologia", "Angiologia", "Diabetologia",
    "Geriatria", "Pomoc humanitarna", "Medycyna tropikalna", "Resuscytacja krążeniowo-oddechowa",
    "Bioetyka medyczna", "Komunikacja z pacjentem"
  ];

  const officePhotos = [
    { src: waitingRoom, caption: "Poczekalnia gabinetu" },
    { src: examinationRoom, caption: "Gabinet lekarski" },
    { src: treatmentRoom, caption: "Sala zabiegowa" },
    { src: medicalEquipment, caption: "Nowoczesny sprzęt do terapii ran" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 medical-gradient backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-bold text-xl text-primary whitespace-nowrap">
              Lekarz od ran
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="medical" size="lg" asChild>
                <a href="https://www.znanylekarz.pl/magdalena-mienciuk/chirurg/bydgoszcz" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Umów wizytę
                </a>
              </Button>
              <a href="#o-mnie" className="text-foreground hover:text-primary transition-smooth">O mnie</a>
              <a href="#uslugi" className="text-foreground hover:text-primary transition-smooth">Usługi</a>
              <a href="#kontakt" className="text-foreground hover:text-primary transition-smooth">Kontakt</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                  Lekarz Magdalena Mieńciuk
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Specjalista chirurgii ogólnej • Leczenie ran przewlekłych
                </p>
              </div>
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-accent/20 border-2 border-dashed border-accent rounded-lg flex items-center justify-center text-muted-foreground text-sm text-center">
                Miejsce na logo
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                    <h4 className="font-semibold text-primary-foreground">Wiedza</h4>
                  </div>
                  <p className="text-primary-foreground/90 text-sm">
                    Pomagam pacjentom w każdym wieku. Mam doświadczenie w pracy z dziećmi i osobami w podeszłym wieku.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <UserCheck className="w-6 h-6 text-primary-foreground" />
                    <h4 className="font-semibold text-primary-foreground">Spersonalizowana pomoc</h4>
                  </div>
                  <p className="text-primary-foreground/90 text-sm">
                    Podchodzę do każdego pacjenta indywidualnie, prowadząc dokładny wywiad i badania przedmiotowe.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    <h4 className="font-semibold text-primary-foreground">Szerokie doświadczenie</h4>
                  </div>
                  <p className="text-primary-foreground/90 text-sm">
                    Nie ustaję w kształceniu się, uczestnicząc w licznych krajowych i międzynarodowych konferencjach.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="medical" size="lg" asChild>
                <a href="https://www.znanylekarz.pl/magdalena-mienciuk/chirurg/bydgoszcz" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Umów wizytę
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Parę słów o mnie
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <img 
                  src={doctorPortrait} 
                  alt="Lekarz Magdalena Mieńciuk" 
                  className="w-full max-w-sm mx-auto rounded-2xl card-shadow"
                />
              </div>
              
              <div className="lg:col-span-2 space-y-4 text-justify">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Magdalena Mieńciuk
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specjalistka chirurgii ogólnej zajmującej się leczeniem ran przewlekłych. Absolwentka Collegium Medicum im. Ludwika Rydygiera w Bydgoszczy Uniwersytetu Mikołaja Kopernika w Toruniu.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Przez blisko dekadę była związana z Pałuckim Centrum Zdrowia w Żninie. Obecnie pracuje w Klinice Angiologii oraz w Poradni Chorób i Chirurgii Naczyń Szpitala Uniwersyteckiego nr 2 im. dr. Jana Biziela w Bydgoszczy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Prowadzi również prywatny gabinet, w którym oferuje kompleksową opiekę w leczeniu ran przewlekłych. Specjalizuje się w zaawansowanej terapii podciśnieniowej (NPWT), metodzie Total Contact Cast (TCC), kompresjoterapii, larwoterapii oraz przeszczepach skóry pośredniej grubości.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Jest członkinią Polskiego Towarzystwa Leczenia Ran oraz Stowarzyszenia Naukowego Leczenia Ran. Dwukrotnie uczestniczyła w wolontariacie medycznym na Jamajce i ukończyła Studia Podyplomowe Pomocy Humanitarnej na Uniwersytecie Warszawskim.
                </p>
              </div>
            </div>

            {/* Memberships */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center text-primary mb-8">
                Członkostwa
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-shadow hover:card-shadow-hover transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary mb-3">
                      Polskie Towarzystwo Leczenia Ran
                    </h4>
                    <p className="text-muted-foreground">
                      Aktywne członkostwo w organizacji skupiającej specjalistów z dziedziny leczenia ran
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow hover:card-shadow-hover transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary mb-3">
                      Stowarzyszenie Naukowe Leczenia Ran
                    </h4>
                    <p className="text-muted-foreground">
                      Udział w badaniach naukowych i rozwoju metod leczenia ran przewlekłych
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-16 medical-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            W czym mogę pomóc?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-primary mb-3">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details Section */}
      <section id="szczegoly" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Szczegółowy opis wybranych zagadnień leczenia
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Button 
                variant="medical" 
                size="lg"
                onClick={() => setShowTreatmentDetails(!showTreatmentDetails)}
                className="w-full md:w-auto"
              >
                <span>Pokaż szczegóły leczenia</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showTreatmentDetails ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {showTreatmentDetails && (
              <div className="space-y-8 animate-in slide-in-from-top duration-500">
                <Card className="border-l-4 border-l-primary card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Leczenie owrzodzeń żylnych
                    </h3>
                    <h4 className="text-lg text-muted-foreground italic mb-4">
                      Skuteczne podejście do zdrowia nóg
                    </h4>
                    <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                      <p>
                        Owrzodzenia żylne goleni to przewlekłe rany rozwijające się w wyniku zaburzeń odpływu żylnego, przewlekłej niewydolności żylnej lub problemów krążeniowych. Najczęściej pojawiają się po wewnętrznej stronie podudzi, wokół kostek, i mogą obejmować duże obszary skóry, powodując dyskomfort oraz przewlekły ból.
                      </p>
                      <p>
                        Kluczową metodą leczenia owrzodzeń żylnych jest kompresjoterapia, uznawana za złoty standard w terapii tych zmian. Kompresjoterapia wspiera prawidłowy przepływ krwi w kończynach dolnych, zmniejsza obrzęk i stymuluje proces gojenia ran.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Terapia podciśnieniowa (NPWT)
                    </h3>
                    <h4 className="text-lg text-muted-foreground italic mb-4">
                      Nowoczesne podejście do leczenia ran przewlekłych
                    </h4>
                    <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                      <p>
                        Terapia podciśnieniowa (Negative Pressure Wound Therapy, NPWT) to zaawansowana metoda leczenia ran przewlekłych, która przyspiesza proces gojenia poprzez zastosowanie kontrolowanego ujemnego ciśnienia.
                      </p>
                      <p>
                        Dzięki zastosowaniu terapii podciśnieniowej (NPWT) możliwe jest leczenie w warunkach domowych, co znacznie zwiększa komfort pacjenta.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Zespół stopy cukrzycowej (ZSC)
                    </h3>
                    <h4 className="text-lg text-muted-foreground italic mb-4">
                      Kompleksowe podejście do leczenia owrzodzeń
                    </h4>
                    <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                      <p>
                        Zespół stopy cukrzycowej (ZSC) to poważne powikłanie cukrzycy, które często prowadzi do owrzodzeń, infekcji i uszkodzenia głębokich tkanek stopy. W leczeniu ZSC stosuje się metodę Total Contact Cast (TCC).
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certyfikaty" className="py-16 medical-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Certyfikaty
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Posiadam liczne certyfikaty i kwalifikacje w dziedzinie chirurgii ogólnej i leczenia ran przewlekłych. Stale podnoszę swoje kwalifikacje, uczestnicząc w krajowych i międzynarodowych konferencjach oraz szkoleniach z nowoczesnych metod leczenia ran.
            </p>
          </div>

          <div className="text-center mb-8">
            <Button 
              variant="medical" 
              size="lg"
              onClick={() => setShowCertificates(!showCertificates)}
            >
              <Award className="w-5 h-5" />
              Zobacz certyfikaty (20+)
            </Button>
          </div>

          {showCertificates && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto animate-in slide-in-from-top duration-500">
              {certificates.map((cert, index) => (
                <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Workshops Section */}
      <section id="warsztaty" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Prowadzone szkolenia i warsztaty
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Regularnie prowadzę szkolenia i warsztaty dla personelu medycznego z zakresu nowoczesnych metod leczenia ran przewlekłych.
            </p>
          </div>

          <div className="text-center mb-8">
            <Button 
              variant="medical" 
              size="lg"
              onClick={() => setShowWorkshops(!showWorkshops)}
            >
              <GraduationCap className="w-5 h-5" />
              Zobacz szczegóły warsztatów
            </Button>
          </div>

          {showWorkshops && (
            <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-top duration-500">
              <Card className="card-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Warsztaty Dobrej Praktyki Leczenia Ran 2025
                  </h4>
                  <Badge variant="secondary" className="mb-4">
                    Wydarzenie w Bydgoszczy
                  </Badge>
                  <div className="text-left space-y-4 text-muted-foreground">
                    <p>
                      W ramach tegorocznej edycji Warsztatów Dobrej Praktyki Leczenia Ran, które odbędą się <strong>8 marca 2025 roku w Bydgoszczy</strong>, lek. med. Magdalena Mieńciuk poprowadzi wykład oraz warsztaty poświęcone kluczowym zagadnieniom z zakresu dermatologii i terapii ran.
                    </p>
                    <div>
                      <h5 className="font-semibold text-primary mb-2">W części wykładowej:</h5>
                      <p>„<strong>Uszkodzenia skóry wywołane wilgocią i ich profilaktyka</strong>"</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-2">Podczas warsztatów praktycznych:</h5>
                      <p>„<strong>Zabezpieczenia skóry podczas terapii podciśnieniowej (NPWT)</strong>"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Office Photos Section */}
      <section className="py-16 medical-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Zdjęcia z gabinetu
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {officePhotos.map((photo, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    {photo.caption}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Kontakt
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Napisz do mnie
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Imię i nazwisko
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Adres e-mail
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Wiadomość
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-vertical"
                      placeholder="Opisz swoją sytuację medyczną lub zadaj pytanie..."
                    />
                  </div>
                  <Button variant="medical" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Wyślij wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Dane i dojazd
              </h3>
              
              <Card className="card-shadow">
                <CardContent className="p-4 flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-primary block mb-1">Telefon:</strong>
                    <a href="tel:509075786" className="text-primary hover:underline">
                      509 075 786
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-4 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-primary block mb-1">Adres:</strong>
                    <div className="text-muted-foreground">
                      Marii Konopnickiej 26<br />
                      85-124 Bydgoszcz
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-4 flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <a 
                      href="https://www.znanylekarz.pl/magdalena-mienciuk/chirurg/bydgoszcz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <strong className="block mb-1">znanylekarz.pl</strong>
                      Umów wizytę online
                      <ExternalLink className="w-4 h-4 inline ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-4 flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <a 
                      href="https://www.instagram.com/lekarz.od.ran" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <strong className="block mb-1">Instagram</strong>
                      @lekarz.od.ran
                      <ExternalLink className="w-4 h-4 inline ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="mapa" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Lokalizacja gabinetu
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl card-shadow overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.234567890123!2d18.004932!3d53.130247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470312b8b8b8b8b8%3A0x1234567890abcdef!2sMarii%20Konopnickiej%2026%2C%2085-124%20Bydgoszcz!5e0!3m2!1spl!2spl!4v1735660800000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja gabinetu - ul. Marii Konopnickiej 26, Bydgoszcz"
              />
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-background p-4 rounded-lg border">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <a 
                  href="https://maps.app.goo.gl/xgDVmBRg1ijQfdPw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  ul. Marii Konopnickiej 26<br />
                  85-124 Bydgoszcz
                </a>
              </div>
              
              <Button variant="medical" size="lg" asChild>
                <a 
                  href="https://maps.app.goo.gl/xgDVmBRg1ijQfdPw7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5" />
                  Wyznacz trasę
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Lekarz Magdalena Mieńciuk. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;