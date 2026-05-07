import Navbar from "@/components/navbar";
import ContactInfo from "@/components/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Contact</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            프로젝트, 채용, 협업과 관련해 편하게 연락해 주세요.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-fit">
            <ContactInfo />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              화면 너머의 동작까지 함께 보는 개발자가 되고 싶습니다.
            </h2>
            <p className="text-muted-foreground">
              사용자가 보는 화면을 만들며 시작했고, 이제는 그 화면 뒤에서
              움직이는 API와 데이터, AI 기능까지 함께 이해하려고 합니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
