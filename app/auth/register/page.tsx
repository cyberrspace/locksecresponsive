import ContentWrapper from "@/components/common/ContentWrapper";
import EstateForm from "@/components/EstateForm/EstateForm";
import SignNav from "@/components/NavOne/SignNav";


export default function SignupPage() {
  return (
    <ContentWrapper>
      <main className="min-h-screen flex flex-col">
        <SignNav />
        <div className="flex flex-1 items-center justify-center">
          <EstateForm />
        </div>
      
      </main>
    </ContentWrapper>
  );
}
