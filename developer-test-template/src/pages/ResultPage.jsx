import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ProgressBar from '../components/ProgressBar';

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
      <Card className="w-[420px] space-y-8 text-center">
        {/* 진행률 */}
        <ProgressBar value={10} max={10} />

        {/* 타이틀 */}
        <section className="space-y-1">
          <p className="text-text-muted text-sm">당신의 개발자 유형</p>
          <h1 className="text-primary text-2xl font-bold">{result.type}</h1>
        </section>

        {/* 캐릭터 */}
        <div className="flex justify-center">
          <img
            src="/images/bee.png"
            alt="result character"
            className="h-40 w-40"
          />
        </div>

        {/* 설명 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">{result.title}</h2>
          <p className="text-text-body leading-relaxed">{result.description}</p>
        </section>

        {/* 해시태그 */}
        <Badge tags={result.hashtags} />

        {/* 특징 */}
        <section className="bg-background space-y-3 rounded-2xl px-5 py-6 text-left">
          <h3 className="text-center font-semibold">나의 특징</h3>
          <ul className="space-y-2">
            {result.features.map((feature, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 버튼 */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="share" />
            <Button
              label="결과 공유하기"
              size="large"
              variant="primary"
              onClick={handleShare}
            />
          </div>

          <div className="flex items-center gap-2">
            <Icon name="refresh" />
            <Button
              label="다시 테스트하기"
              size="large"
              variant="secondary"
              onClick={handleRestart}
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
