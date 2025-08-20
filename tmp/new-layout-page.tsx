"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock, Award, Users, Heart } from "lucide-react"

export default function MedicalWebsite() {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [expandedCertificate, setExpandedCertificate] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const toggleCertificate = (certId: string) => {
    setExpandedCertificate(expandedCertificate === certId ? null : certId)
  }

  const services = [
    {
      id: "venous-ulcers",
      title: "Leczenie owrzodzeń żylnych",
      description:
        "Specjalistyczne leczenie przewlekłych ran żylnych z zastosowaniem nowoczesnych metod terapeutycznych.",
      details:
        "Kompleksowe podejście do leczenia owrzodzeń żylnych obejmuje diagnostykę dopplerowską, terapię kompresyjną, opatrunki specjalistyczne oraz edukację pacjenta. Stosujemy najnowsze protokoły leczenia zgodne z wytycznymi europejskimi.",
    },
    {
      id: "pressure-sores",
      title: "Leczenie odleżyn",
      description: "Profesjonalne leczenie odleżyn wszystkich stopni zaawansowania.",
      details:
        "Leczenie odleżyn wymaga indywidualnego podejścia. Oferujemy ocenę ryzyka, profilaktykę, debridement chirurgiczny, terapię podciśnieniową NPWT oraz rekonstrukcję chirurgiczną w zaawansowanych przypadkach.",
    },
    {
      id: "diabetic-foot",
      title: "Zespół stopy cukrzycowej",
      description: "Kompleksowa opieka nad pacjentami z zespołem stopy cukrzycowej.",
      details:
        "Multidyscyplinarne podejście do leczenia stopy cukrzycowej obejmuje kontrolę glikemii, ocenę naczyniową, leczenie infekcji, odciążenie oraz edukację pacjenta. Współpracujemy z diabetologami i chirurgami naczyniowymi.",
    },
    {
      id: "npwt-therapy",
      title: "Terapia podciśnieniowa NPWT",
      description: "Nowoczesna terapia podciśnieniowa wspomagająca gojenie ran.",
      details:
        "Terapia NPWT (Negative Pressure Wound Therapy) przyspiesza gojenie poprzez usuwanie wysięku, redukcję obrzęku, poprawę perfuzji i stymulację tworzenia tkanki granulacyjnej. Stosowana w ranach ostrych i przewlekłych.",
    },
    {
      id: "compression-therapy",
      title: "Terapia kompresyjna",
      description: "Profesjonalne bandażowanie i dobór wyrobów kompresyjnych.",
      details:
        "Terapia kompresyjna jest podstawą leczenia niewydolności żylnej. Oferujemy bandażowanie wielowarstwowe, dobór pończoch kompresyjnych oraz edukację pacjenta w zakresie samoopieki.",
    },
    {
      id: "skin-grafts",
      title: "Przeszczepy skóry",
      description: "Chirurgiczne leczenie ran z zastosowaniem przeszczepów skórnych.",
      details:
        "Przeszczepy skóry stosowane są w przypadku dużych ubytków skórnych. Wykonujemy przeszczepy pełnoskórne i częściowoskórne, przeszczepy z siatką oraz nowoczesne substytuty skóry.",
    },
  ]

  const certificates = [
    {
      id: "wound-specialist",
      title: "Certyfikat Specjalisty ds. Leczenia Ran",
      issuer: "Polskie Towarzystwo Leczenia Ran",
      year: "2020",
      details:
        "Certyfikat potwierdzający specjalistyczne kompetencje w zakresie leczenia ran przewlekłych, uzyskany po ukończeniu kursu i zdaniu egzaminu certyfikacyjnego.",
    },
    {
      id: "npwt-certification",
      title: "Certyfikat Terapii Podciśnieniowej",
      issuer: "European Wound Management Association",
      year: "2019",
      details:
        "Międzynarodowy certyfikat potwierdzający kompetencje w zakresie stosowania terapii podciśnieniowej NPWT w leczeniu ran ostrych i przewlekłych.",
    },
    {
      id: "compression-therapy",
      title: "Certyfikat Terapii Kompresyjnej",
      issuer: "International Compression Club",
      year: "2021",
      details:
        "Certyfikat specjalisty terapii kompresyjnej, obejmujący nowoczesne techniki bandażowania i doboru wyrobów kompresyjnych.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr Magdalena Mieńciuk</h1>
                <p className="text-sm text-gray-600">Specjalista Chirurgii Ogólnej</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                O mnie
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Usługi
              </a>
              <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition-colors">
                Certyfikaty
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Specjalistyczne Leczenie
            <span className="block text-blue-600">Ran Przewlekłych</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Profesjonalna opieka medyczna w zakresie leczenia owrzodzeń żylnych, odleżyn, zespołu stopy cukrzycowej z
            zastosowaniem najnowszych metod terapeutycznych.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-5 h-5 mr-2" />
              Umów wizytę
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-5 h-5 mr-2" />
              Skontaktuj się
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">O mnie</h3>
              <p className="text-gray-600 mb-4">
                Jestem specjalistą chirurgii ogólnej z wieloletnim doświadczeniem w leczeniu ran przewlekłych. Moja
                praktyka koncentruje się na nowoczesnych metodach terapeutycznych, które zapewniają pacjentom najwyższą
                jakość opieki medycznej.
              </p>
              <p className="text-gray-600 mb-6">
                Posiadam certyfikaty specjalistyczne w zakresie leczenia ran, terapii podciśnieniowej NPWT oraz terapii
                kompresyjnej. Regularnie uczestniczę w szkoleniach i konferencjach medycznych, aby być na bieżąco z
                najnowszymi osiągnięciami w dziedzinie leczenia ran.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Chirurgia Ogólna</Badge>
                <Badge variant="secondary">Leczenie Ran</Badge>
                <Badge variant="secondary">Terapia NPWT</Badge>
                <Badge variant="secondary">Terapia Kompresyjna</Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Pacjentów</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Lat doświadczenia</div>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Skuteczność</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Dostępność</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Usługi Medyczne</h3>
            <p className="text-xl text-gray-600">Kompleksowa opieka w zakresie leczenia ran przewlekłych</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    onClick={() => toggleService(service.id)}
                    className="w-full justify-between p-0 h-auto"
                  >
                    <span>Dowiedz się więcej</span>
                    {expandedService === service.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {expandedService === service.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">{service.details}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Certyfikaty i Kwalifikacje</h3>
            <p className="text-xl text-gray-600">Potwierdzenie najwyższych kompetencji medycznych</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Award className="w-8 h-8 text-blue-600" />
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    onClick={() => toggleCertificate(cert.id)}
                    className="w-full justify-between p-0 h-auto"
                  >
                    <span>Szczegóły</span>
                    {expandedCertificate === cert.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {expandedCertificate === cert.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">{cert.details}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Kontakt</h3>
            <p className="text-xl text-gray-600">Skontaktuj się, aby umówić wizytę lub uzyskać więcej informacji</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefon</h4>
                  <p className="text-gray-600">+48 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">kontakt@drmieńciuk.pl</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Adres</h4>
                  <p className="text-gray-600">
                    ul. Medyczna 123
                    <br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Godziny przyjęć</h4>
                  <p className="text-gray-600">
                    Pon-Pt: 8:00 - 18:00
                    <br />
                    Sob: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Formularz kontaktowy</CardTitle>
                <CardDescription>Wyślij wiadomość, a skontaktujemy się z Tobą w ciągu 24 godzin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź swoje imię i nazwisko"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź swój adres email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź swój numer telefonu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Opisz swoją sytuację lub zadaj pytanie"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Wyślij wiadomość</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Dr Magdalena Mieńciuk</h4>
              <p className="text-gray-400">Specjalista Chirurgii Ogólnej</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Profesjonalne leczenie ran przewlekłych z zastosowaniem najnowszych metod terapeutycznych
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-500 text-sm">© 2024 Dr Magdalena Mieńciuk. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
