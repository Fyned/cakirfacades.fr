import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import ScrollReveal from '../animations/ScrollReveal'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('next')
  const timeoutRef = useRef(null)

  // Auto-advance testimonials
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      goToNext()
    }, 6000)
    return () => clearInterval(timeoutRef.current)
  }, [current])

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('next')
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('prev')
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === current) return
    setIsAnimating(true)
    setSlideDirection(index > current ? 'next' : 'prev')
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <span className="inline-block text-cakir-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cakir-black mb-4">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense. Découvrez leurs avis sur nos prestations.
          </p>
        </ScrollReveal>

        {/* Testimonial Slider */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-cakir-gold flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Card */}
            <div className="bg-cakir-light rounded-3xl p-8 md:p-12 pt-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-cakir-gold">
                  <path d="M45.5,-51.8C58.9,-41.7,69.5,-27.4,73.1,-11.1C76.7,5.2,73.4,23.5,63.3,37.3C53.2,51.1,36.4,60.4,18.5,66.1C0.5,71.8,-18.5,73.9,-35.2,67.7C-51.9,61.5,-66.4,47,-74.1,29C-81.8,11,-82.7,-10.5,-75.5,-28C-68.3,-45.5,-53,-59,-36.6,-68.4C-20.2,-77.8,-2.8,-83.1,11.6,-79.3C26,-75.5,32.1,-61.9,45.5,-51.8Z" transform="translate(100 100)" />
                </svg>
              </div>

              {/* Testimonial Content with CSS transitions */}
              <div
                className={`relative z-10 transition-all duration-300 ${
                  isAnimating
                    ? slideDirection === 'next'
                      ? 'opacity-0 translate-x-8'
                      : 'opacity-0 -translate-x-8'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-cakir-gold fill-cakir-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-cakir-black text-center leading-relaxed mb-8 font-medium">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-cakir-black">
                    {testimonials[current].author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[current].location} • {testimonials[current].service}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-cakir-gold hover:text-cakir-gold transition-colors"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === current
                          ? 'w-8 bg-cakir-gold'
                          : 'w-2 bg-gray-300 hover:bg-cakir-gold/50'
                      }`}
                      aria-label={`Témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-cakir-gold hover:text-cakir-gold transition-colors"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
