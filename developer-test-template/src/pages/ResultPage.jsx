import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Icon from '../components/Icon';
import frontendCharacter from '../assets/characters/frontend.webp';

const dummyResult = {
  type: '프론트엔드 벌',
  title: '예쁜 걸 사랑하는 디자이너 벌',
  description:
    '사용자가 보는 화면을 아름답게 만드는 것이 가장 큰 즐거움! 색상, 레이아웃, 애니메이션에 진심인 당신은 프론트엔드 전문가입니다.',
  hashtags: ['React', 'CSS', '디자인', 'UI', '사용자경험'],
  features: [
    '디테일에 강한 관찰력을 가지고 있다',
    'UI/UX에 대한 감각이 뛰어나다',
    '사용자 경험을 최우선으로 생각한다',
    '새로운 디자인 트렌드에 관심이 많다',
    '시각적인 완성도를 중요하게 생각한다',
  ],
};

export default function ResultPage() {
  const result = dummyResult;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다!');
  };

  const handleRestart = () => {
    // 나중에 상태 초기화 연결
  };

  return (
    <main className="flex min-h-screen justify-center bg-gray-50 py-10">
      <Card className="w-105 space-y-8 text-center">
        {/* 타이틀 */}
        <section className="space-y-1">
          <p className="text-text-description text-center text-xl leading-7 font-medium tracking-[-0.45px]">
            당신의 개발자 유형
          </p>
          <h1 className="text-primary text-center text-2xl leading-8 font-medium tracking-[0.07px]">
            {result.type}
          </h1>
        </section>

        {/* 캐릭터 */}
        <div className="flex justify-center">
          <img
            src={frontendCharacter}
            alt="프론트엔드 벌 캐릭터"
            className="h-45 w-45"
          />
        </div>

        {/* 설명 */}
        <section className="space-y-2">
          <h2 className="text-text-heading text-center text-lg leading-7 font-medium tracking-[-0.44px]">
            {result.title}
          </h2>
          <p className="text-text-description text-center text-sm leading-[22.75px] font-normal tracking-[-0.15px]">
            {result.description}
          </p>
        </section>

        {/* 해시태그 */}
        <div className="mx-auto w-full max-w-96">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge tags={result.hashtags} />
          </div>
        </div>

        {/* 특징 */}
        <section className="bg-background space-y-3 rounded-2xl px-5 py-6 text-left">
          <h3 className="text-text-heading text-center text-base leading-6 font-medium tracking-[-0.31px]">
            나의 특징
          </h3>

          <ul className="space-y-2">
            {result.features.map((feature, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary">•</span>
                <span className="text-text-body text-sm leading-6 font-normal">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 버튼 */}
        <div className="flex flex-col gap-4">
          <Button
            size="large"
            variant="primary"
            onClick={handleShare}
            className="flex w-full items-center justify-center gap-2"
          >
            <Icon name="share" />
            결과 공유하기
          </Button>

          <Button
            size="large"
            variant="secondary"
            onClick={handleRestart}
            className="flex w-full items-center justify-center gap-2"
          >
            <Icon name="refresh" />
            다시 테스트하기
          </Button>
        </div>
      </Card>
    </main>
  );
}
