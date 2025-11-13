import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimulationSelection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const simulations = [
    { id: 1, icon: '🍜', title: '라면 조리 시간과 맛의 변화', link: '/sim1', color: 'from-yellow-400 to-orange-500' },
    { id: 2, icon: '🧂', title: '소금의 양과 짠맛 강도', link: '/sim2', color: 'from-amber-400 to-orange-600' },
    { id: 3, icon: '🧬', title: '코돈과 아미노산', link: '/sim3', color: 'from-indigo-400 to-purple-600' },
    { id: 4, icon: '🦠', title: '세포막 물질 이동', link: '/sim4', color: 'from-cyan-400 to-blue-600' },
    { id: 5, icon: '🐕', title: '강아지 성장과 사료량', link: '/sim5', color: 'from-blue-400 to-purple-600' },
    { id: 6, icon: '🐾', title: '강아지 견종별 운동량', link: '/sim6', color: 'from-purple-400 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">일상 속 함수 탐험하기 🔬</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simulations.map(sim => (
            <div
              key={sim.id}
              className="relative h-80 cursor-pointer perspective-1000"
              onMouseEnter={() => setHoveredCard(sim.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(sim.link)}
            >
              {/* 카드 앞/뒤면 JSX 동일 */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
