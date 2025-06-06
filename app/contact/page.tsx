import Navbar from "@/components/navbar"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">연락하기</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            프로젝트 협업이나 채용 관련 문의사항이 있으시면 언제든지 연락해주세요.
            <br />
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-fit">
            <ContactInfo />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">함께 일하고 싶습니다!</h2>
            <p className="text-muted-foreground">
              새로운 기술을 배우고 성장할 수 있는 기회를 찾고 있습니다.
              <br />
              사용자 중심의 웹 서비스를 만들어가는 팀에 합류하고 싶습니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
