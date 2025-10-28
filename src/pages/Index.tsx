import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const programs = [
    {
      title: 'Гостиничный сервис премиум-класса',
      duration: '3 месяца',
      modules: [
        'Стандарты обслуживания 5*',
        'Управление номерным фондом',
        'Guest relations и работа с VIP-гостями',
        'Конфликтология и стрессоустойчивость',
        'Системы бронирования и Revenue Management'
      ]
    },
    {
      title: 'Управление отелем',
      duration: '4 месяца',
      modules: [
        'Операционный менеджмент отеля',
        'Финансовый контроль и бюджетирование',
        'Управление персоналом и HR',
        'Маркетинг и продвижение отеля',
        'Работа с OTA и прямые продажи'
      ]
    },
    {
      title: 'Администратор гостиницы',
      duration: '2 месяца',
      modules: [
        'Front Office операции',
        'Работа в PMS системах',
        'Обработка бронирований и заселение',
        'Работа с жалобами гостей',
        'Кросс-продажи и допродажи'
      ]
    }
  ];

  const teachers = [
    {
      name: 'Михаил Соколов',
      position: 'Генеральный директор отеля 5*',
      experience: '15 лет',
      achievement: 'Лучший отель года по версии Forbes Travel Guide'
    },
    {
      name: 'Анна Петрова',
      position: 'Эксперт по гостеприимству',
      experience: '12 лет',
      achievement: 'Операционный директор сети из 8 отелей'
    },
    {
      name: 'Дмитрий Орлов',
      position: 'Revenue Manager',
      experience: '10 лет',
      achievement: 'Увеличил доходность на 40% в 15 отелях'
    }
  ];

  const pricing = [
    {
      name: 'Базовый',
      price: '45 000',
      features: [
        'Доступ к видеолекциям',
        'Методические материалы',
        'Чат с преподавателем',
        'Сертификат о прохождении'
      ]
    },
    {
      name: 'Стандарт',
      price: '75 000',
      features: [
        'Все из базового',
        'Индивидуальные консультации',
        'Разбор кейсов',
        'Помощь в трудоустройстве',
        'Доступ к закрытому клубу'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '120 000',
      features: [
        'Все из стандарта',
        'Личный куратор',
        'Стажировка в топовых заведениях',
        'Нетворкинг-мероприятия',
        'Пожизненный доступ к материалам'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Нужен ли опыт работы для обучения?',
      answer: 'Нет, наши программы подходят как для новичков, так и для опытных специалистов, желающих повысить квалификацию.'
    },
    {
      question: 'Какой формат обучения?',
      answer: 'Гибридный формат: видеолекции доступны 24/7, еженедельные вебинары в прямом эфире и практические задания с обратной связью.'
    },
    {
      question: 'Выдается ли диплом?',
      answer: 'По окончании курса вы получаете сертификат установленного образца и диплом о профессиональной переподготовке (при выборе расширенной программы).'
    },
    {
      question: 'Можно ли оплатить обучение в рассрочку?',
      answer: 'Да, мы предлагаем беспроцентную рассрочку на 6-12 месяцев. Первый взнос — всего 20% от стоимости.'
    },
    {
      question: 'Помогаете ли с трудоустройством?',
      answer: 'Да, у нас есть карьерный центр с базой партнеров из индустрии. Мы помогаем составить резюме и подготовиться к собеседованиям.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Hotel" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-slate-900">Hotel Academy</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#programs" className="text-slate-600 hover:text-primary transition-colors">Программы</a>
            <a href="#teachers" className="text-slate-600 hover:text-primary transition-colors">Преподаватели</a>
            <a href="#pricing" className="text-slate-600 hover:text-primary transition-colors">Стоимость</a>
            <a href="#faq" className="text-slate-600 hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Записаться</Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Профессиональное обучение</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Станьте профессионалом гостиничного бизнеса
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Развивайте навыки премиального гостеприимства с лучшими экспертами индустрии. 
                Практические знания для успешной карьеры в отельном бизнесе.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Программа курсов
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-slate-600">Выпускников</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">95%</div>
                  <div className="text-slate-600">Трудоустроено</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">4.9</div>
                  <div className="text-slate-600">Рейтинг курса</div>
                </div>
              </div>
            </div>
            <Card className="p-8 shadow-2xl animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Запишитесь на консультацию</CardTitle>
                <CardDescription>Подберем программу под ваши цели</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-slate-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Программы обучения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Выберите свое направление
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Структурированные программы от практиков с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Card key={idx} className="hover-scale hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Icon name="Clock" size={16} />
                    {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Модули курса:</h4>
                  <ul className="space-y-2">
                    {program.modules.map((module, i) => (
                      <li key={i} className="flex gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-slate-600">{module}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее о курсе
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши преподаватели</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Учитесь у лучших экспертов
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Практики с реальным опытом управления премиальными заведениями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <Card key={idx} className="text-center hover-scale transition-transform">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">{teacher.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span className="font-semibold">Опыт: {teacher.experience}</span>
                  </div>
                  <p className="text-slate-600">{teacher.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Стоимость обучения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Выберите тариф
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Гибкие условия оплаты и рассрочка без процентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative hover-scale transition-all ${
                  plan.popular ? 'border-primary border-2 shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price} ₽
                  </div>
                  <CardDescription>за курс</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-slate-600">
              Ответы на популярные вопросы о наших курсах
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Ответим на все вопросы и поможем выбрать программу обучения
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Телефон</div>
                    <a href="tel:+74951234567" className="text-slate-600 hover:text-primary">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <a href="mailto:info@proservice.ru" className="text-slate-600 hover:text-primary">
                      info@proservice.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Адрес</div>
                    <p className="text-slate-600">
                      Москва, ул. Тверская, д. 15<br />
                      БЦ «Премиум», офис 301
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hotel" size={28} />
                <span className="text-xl font-bold">Hotel Academy</span>
              </div>
              <p className="text-slate-400">
                Профессиональное обучение для гостиничного бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Администратор отеля</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Управление отелем</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Премиум сервис</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 ProService Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}