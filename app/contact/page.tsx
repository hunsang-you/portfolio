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
              AI와 웹 서비스를 함께 이해하는 개발자로 성장하고 있습니다.
            </h2>
            <p className="text-muted-foreground">
              프론트엔드 경험을 바탕으로 LLM, API, 데이터, 검색 결과가 사용자
              흐름 안에서 안정적으로 이어지는 서비스를 만들고 싶습니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
