'use client'

import { useState } from 'react'
import { User, Activity, TrendingUp, Moon, Apple, Utensils, Crown, Settings, LogOut, Play, Pause, ChevronRight, Check, X } from 'lucide-react'

export default function FitTrack() {
  const [currentScreen, setCurrentScreen] = useState('welcome')
  const [user, setUser] = useState({ name: '', email: '', weight: '', height: '', goal: '' })

  // Welcome Screen
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00FF00] to-[#00cc00] rounded-3xl flex items-center justify-center animate-pulse-glow">
            <Activity className="w-12 h-12 text-[#0D0D0D]" />
          </div>
          <h1 className="text-5xl font-bold text-white font-inter">FitTrack</h1>
          <p className="text-gray-400 text-lg">Seu parceiro fitness premium</p>
        </div>
        
        <div className="space-y-4 mt-12">
          <button 
            onClick={() => setCurrentScreen('signup')}
            className="w-full bg-gradient-to-r from-[#00FF00] to-[#00cc00] text-[#0D0D0D] py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform"
          >
            Criar Conta
          </button>
          <button 
            onClick={() => setCurrentScreen('home')}
            className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Entrar
          </button>
        </div>

        <div className="space-y-3 mt-8">
          <p className="text-center text-gray-500 text-sm">Ou continue com</p>
          <div className="grid grid-cols-4 gap-3">
            <button className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
            <button className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="white"/>
              </svg>
            </button>
            <button className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              </svg>
            </button>
            <button className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Signup Screen
  const SignupScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] p-6">
      <div className="max-w-md mx-auto">
        <button onClick={() => setCurrentScreen('welcome')} className="text-gray-400 mb-6">← Voltar</button>
        <h2 className="text-3xl font-bold text-white mb-8">Criar Conta</h2>
        
        <div className="space-y-4">
          <input type="text" placeholder="Nome completo" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none" />
          <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none" />
          <input type="password" placeholder="Senha" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none" />
          <input type="date" placeholder="Data de Nascimento" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none" />
          <input type="number" placeholder="Peso (kg)" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none" />
          <input type="number" placeholder="Altura (cm)" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none" />
          <select className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:border-[#00FF00] outline-none">
            <option>Objetivo: Perder peso</option>
            <option>Objetivo: Ganhar massa</option>
            <option>Objetivo: Manter forma</option>
          </select>
          
          <button 
            onClick={() => setCurrentScreen('onboarding')}
            className="w-full bg-gradient-to-r from-[#00FF00] to-[#00cc00] text-[#0D0D0D] py-4 rounded-2xl font-semibold text-lg mt-6 hover:scale-105 transition-transform"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  )

  // Onboarding Screen
  const OnboardingScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-6">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#00FF00]/20 to-[#00cc00]/20 rounded-full flex items-center justify-center">
          <Activity className="w-16 h-16 text-[#00FF00]" />
        </div>
        <h2 className="text-3xl font-bold text-white">Bem-vindo ao FitTrack!</h2>
        <p className="text-gray-400 text-lg">Monitore treinos, nutrição, sono e progresso em um só lugar</p>
        <button 
          onClick={() => setCurrentScreen('home')}
          className="bg-gradient-to-r from-[#00FF00] to-[#00cc00] text-[#0D0D0D] px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform"
        >
          Começar Jornada
        </button>
      </div>
    </div>
  )

  // Home Dashboard
  const HomeScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Olá, Atleta!</h1>
            <p className="text-gray-400">Vamos treinar hoje?</p>
          </div>
          <button onClick={() => setCurrentScreen('profile')} className="w-12 h-12 bg-gradient-to-br from-[#00FF00] to-[#00cc00] rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-[#0D0D0D]" />
          </button>
        </div>

        {/* Progress Circle */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle cx="96" cy="96" r="88" stroke="#1a1a1a" strokeWidth="12" fill="none" />
                <circle cx="96" cy="96" r="88" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="552" strokeDashoffset="138" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00FF00" />
                    <stop offset="100%" stopColor="#00cc00" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">8,547</span>
                <span className="text-gray-400">passos</span>
              </div>
            </div>
            <p className="text-gray-400">Meta: 10.000 passos</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
            <div className="text-[#00FF00] mb-2">🔥</div>
            <p className="text-2xl font-bold text-white">342</p>
            <p className="text-gray-400 text-sm">Calorias</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
            <div className="text-[#00FF00] mb-2">⏱️</div>
            <p className="text-2xl font-bold text-white">45</p>
            <p className="text-gray-400 text-sm">Minutos ativos</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
            <div className="text-[#00FF00] mb-2">📍</div>
            <p className="text-2xl font-bold text-white">6.8</p>
            <p className="text-gray-400 text-sm">Quilômetros</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
            <div className="text-[#00FF00] mb-2">💪</div>
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-gray-400 text-sm">Treinos</p>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#00FF00] to-[#00cc00] text-[#0D0D0D] py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
          + Adicionar Atividade Manual
        </button>
      </div>

      <BottomNav current="home" onChange={setCurrentScreen} />
    </div>
  )

  // Workouts Screen
  const WorkoutsScreen = () => {
    const workouts = [
      { name: 'HIIT Intenso', duration: '20 min', category: 'HIIT', emoji: '🔥' },
      { name: 'Corpo Inteiro', duration: '35 min', category: 'Força', emoji: '💪' },
      { name: 'Alongamento', duration: '15 min', category: 'Flexibilidade', emoji: '🧘' },
      { name: 'Cardio Queima', duration: '30 min', category: 'Cardio', emoji: '🏃' },
    ]

    return (
      <div className="min-h-screen bg-[#0D0D0D] pb-24">
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-white">Treinos</h1>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {['Todos', 'HIIT', 'Força', 'Cardio', 'Flexibilidade'].map((cat) => (
              <button key={cat} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white whitespace-nowrap hover:bg-[#00FF00] hover:text-[#0D0D0D] transition-colors">
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {workouts.map((workout, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-colors cursor-pointer" onClick={() => setCurrentScreen('player')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00FF00]/20 to-[#00cc00]/20 rounded-xl flex items-center justify-center text-3xl">
                      {workout.emoji}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{workout.name}</h3>
                      <p className="text-gray-400 text-sm">{workout.duration} • {workout.category}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <BottomNav current="workouts" onChange={setCurrentScreen} />
      </div>
    )
  }

  // Player Screen
  const PlayerScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [time, setTime] = useState(1200)

    return (
      <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
        <div className="p-6">
          <button onClick={() => setCurrentScreen('workouts')} className="text-gray-400">← Voltar</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">HIIT Intenso</h2>
            <p className="text-gray-400">Exercício 1 de 10</p>
          </div>

          <div className="relative w-64 h-64">
            <svg className="transform -rotate-90 w-64 h-64">
              <circle cx="128" cy="128" r="120" stroke="#1a1a1a" strokeWidth="8" fill="none" />
              <circle cx="128" cy="128" r="120" stroke="#00FF00" strokeWidth="8" fill="none" strokeDasharray="754" strokeDashoffset="377" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-bold text-white">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-white">Burpees</h3>
            <p className="text-gray-400">30 segundos • Alta intensidade</p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setIsPlaying(!isPlaying)} className="w-16 h-16 bg-gradient-to-br from-[#00FF00] to-[#00cc00] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              {isPlaying ? <Pause className="w-8 h-8 text-[#0D0D0D]" /> : <Play className="w-8 h-8 text-[#0D0D0D]" />}
            </button>
            <button className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Sleep Screen
  const SleepScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white">Sono</h1>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
          <div className="text-center space-y-4">
            <Moon className="w-16 h-16 text-[#00FF00] mx-auto" />
            <div>
              <p className="text-5xl font-bold text-white">7h 32m</p>
              <p className="text-gray-400 mt-2">Última noite</p>
            </div>
            <div className="flex justify-center gap-8 mt-6">
              <div>
                <p className="text-2xl font-bold text-white">23:15</p>
                <p className="text-gray-400 text-sm">Dormiu</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">06:47</p>
                <p className="text-gray-400 text-sm">Acordou</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Semana</h3>
          <div className="flex items-end justify-between h-32 gap-2">
            {[6.5, 7, 8, 7.5, 6, 7.5, 7.5].map((hours, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-[#00FF00] to-[#00cc00] rounded-t-lg" style={{ height: `${(hours / 9) * 100}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, i) => (
              <span key={i}>{day}</span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#00FF00]/10 to-[#00cc00]/10 border border-[#00FF00]/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Insight</h3>
          <p className="text-gray-300">Você dormiu 15% melhor esta semana! Continue mantendo uma rotina regular.</p>
        </div>
      </div>

      <BottomNav current="sleep" onChange={setCurrentScreen} />
    </div>
  )

  // Nutrition Screen
  const NutritionScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white">Nutrição</h1>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400">Calorias Hoje</p>
            <p className="text-5xl font-bold text-white">1,847</p>
            <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-[#00FF00] to-[#00cc00] h-full rounded-full" style={{ width: '74%' }} />
            </div>
            <p className="text-gray-400 text-sm">Meta: 2,500 kcal</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-white">87g</p>
            <p className="text-gray-400 text-sm">Proteína</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-white">203g</p>
            <p className="text-gray-400 text-sm">Carbos</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-white">54g</p>
            <p className="text-gray-400 text-sm">Gordura</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Refeições de Hoje</h3>
          {[
            { meal: 'Café da Manhã', cal: 420, time: '08:30' },
            { meal: 'Almoço', cal: 680, time: '13:00' },
            { meal: 'Lanche', cal: 180, time: '16:30' },
            { meal: 'Jantar', cal: 567, time: '20:00' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-white">{item.meal}</p>
                <p className="text-gray-400 text-sm">{item.time}</p>
              </div>
              <p className="text-[#00FF00] font-semibold">{item.cal} kcal</p>
            </div>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-[#00FF00] to-[#00cc00] text-[#0D0D0D] py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
          + Adicionar Refeição
        </button>
      </div>

      <BottomNav current="nutrition" onChange={setCurrentScreen} />
    </div>
  )

  // Progress Screen
  const ProgressScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white">Progresso</h1>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Evolução de Peso</h3>
          <div className="flex items-end justify-between h-40 gap-2">
            {[82, 81.5, 81, 80.5, 80, 79.5, 79].map((weight, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-gray-400">{weight}</span>
                <div className="w-full bg-gradient-to-t from-[#00FF00] to-[#00cc00] rounded-t-lg" style={{ height: `${((82 - weight) / 3) * 100 + 20}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-[#00FF00] mb-3" />
            <p className="text-2xl font-bold text-white">-3kg</p>
            <p className="text-gray-400 text-sm">Últimos 30 dias</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
            <Activity className="w-8 h-8 text-[#00FF00] mb-3" />
            <p className="text-2xl font-bold text-white">24</p>
            <p className="text-gray-400 text-sm">Treinos completos</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">🏆 Conquistas</h3>
          <div className="space-y-3">
            {[
              { title: 'Primeira Semana', desc: 'Complete 7 dias seguidos', done: true },
              { title: '10.000 Passos', desc: 'Alcance a meta diária', done: true },
              { title: 'Maratonista', desc: 'Complete 30 treinos', done: false },
            ].map((achievement, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.done ? 'bg-gradient-to-br from-[#00FF00] to-[#00cc00]' : 'bg-white/5'}`}>
                  {achievement.done ? <Check className="w-6 h-6 text-[#0D0D0D]" /> : <X className="w-6 h-6 text-gray-500" />}
                </div>
                <div>
                  <p className="font-semibold text-white">{achievement.title}</p>
                  <p className="text-gray-400 text-sm">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav current="progress" onChange={setCurrentScreen} />
    </div>
  )

  // Premium Screen
  const PremiumScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      <div className="p-6 space-y-6">
        <button onClick={() => setCurrentScreen('home')} className="text-gray-400">← Voltar</button>
        
        <div className="text-center space-y-4">
          <Crown className="w-20 h-20 text-[#00FF00] mx-auto" />
          <h1 className="text-4xl font-bold text-white">FitTrack Premium</h1>
          <p className="text-gray-400 text-lg">Desbloqueie todo o potencial</p>
        </div>

        <div className="space-y-3">
          {[
            'Treinos personalizados ilimitados',
            'Planos de nutrição customizados',
            'Análise avançada de sono',
            'Sem anúncios',
            'Suporte prioritário',
            'Novos treinos toda semana',
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4">
              <Check className="w-5 h-5 text-[#00FF00]" />
              <p className="text-white">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Mensal</p>
            <p className="text-3xl font-bold text-white">R$ 29,90</p>
            <p className="text-gray-400 text-xs mt-1">/mês</p>
          </div>
          <div className="bg-gradient-to-br from-[#00FF00]/20 to-[#00cc00]/20 border-2 border-[#00FF00] rounded-2xl p-6 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00FF00] text-[#0D0D0D] px-3 py-1 rounded-full text-xs font-semibold">
              MELHOR VALOR
            </div>
            <p className="text-gray-300 text-sm mb-2">Anual</p>
            <p className="text-3xl font-bold text-white">R$ 197</p>
            <p className="text-gray-300 text-xs mt-1">/ano</p>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#00FF00] to-[#00cc00] text-[#0D0D0D] py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform">
          Assinar Premium
        </button>
      </div>
    </div>
  )

  // Profile Screen
  const ProfileScreen = () => (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white">Perfil</h1>

        <div className="flex items-center gap-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#00FF00] to-[#00cc00] rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-[#0D0D0D]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">João Silva</h2>
            <p className="text-gray-400">joao@email.com</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { icon: <User className="w-5 h-5" />, label: 'Editar Perfil' },
            { icon: <Activity className="w-5 h-5" />, label: 'Minhas Metas' },
            { icon: <Crown className="w-5 h-5" />, label: 'Assinar Premium', highlight: true },
            { icon: <Settings className="w-5 h-5" />, label: 'Configurações' },
          ].map((item, i) => (
            <button key={i} onClick={() => item.highlight && setCurrentScreen('premium')} className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${item.highlight ? 'bg-gradient-to-r from-[#00FF00]/20 to-[#00cc00]/20 border border-[#00FF00]' : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:bg-white/10'}`}>
              <div className="flex items-center gap-3">
                <div className={item.highlight ? 'text-[#00FF00]' : 'text-gray-400'}>{item.icon}</div>
                <span className={item.highlight ? 'text-[#00FF00] font-semibold' : 'text-white'}>{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        <button onClick={() => setCurrentScreen('welcome')} className="w-full flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 py-4 rounded-2xl font-semibold hover:bg-red-500/20 transition-colors">
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </div>

      <BottomNav current="profile" onChange={setCurrentScreen} />
    </div>
  )

  // Bottom Navigation
  const BottomNav = ({ current, onChange }: { current: string; onChange: (screen: string) => void }) => (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-lg border-t border-white/10">
      <div className="flex justify-around items-center p-4">
        {[
          { id: 'home', icon: <Activity className="w-6 h-6" />, label: 'Início' },
          { id: 'workouts', icon: <Play className="w-6 h-6" />, label: 'Treinos' },
          { id: 'nutrition', icon: <Utensils className="w-6 h-6" />, label: 'Nutrição' },
          { id: 'sleep', icon: <Moon className="w-6 h-6" />, label: 'Sono' },
          { id: 'progress', icon: <TrendingUp className="w-6 h-6" />, label: 'Progresso' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${current === item.id ? 'text-[#00FF00]' : 'text-gray-400'}`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )

  // Screen Router
  const screens: Record<string, JSX.Element> = {
    welcome: <WelcomeScreen />,
    signup: <SignupScreen />,
    onboarding: <OnboardingScreen />,
    home: <HomeScreen />,
    workouts: <WorkoutsScreen />,
    player: <PlayerScreen />,
    sleep: <SleepScreen />,
    nutrition: <NutritionScreen />,
    progress: <ProgressScreen />,
    premium: <PremiumScreen />,
    profile: <ProfileScreen />,
  }

  return screens[currentScreen] || <WelcomeScreen />
}
