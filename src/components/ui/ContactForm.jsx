import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import Button from './Button'

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')

    // Simulate form submission - in production, use EmailJS or similar
    try {
      // await emailjs.send(serviceId, templateId, data, publicKey)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputStyles = `w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-cakir-gold focus:ring-1 focus:ring-cakir-gold outline-none transition-colors ${
    compact ? 'text-sm' : ''
  }`

  const labelStyles = `block text-sm font-medium text-cakir-black mb-1.5`

  const errorStyles = 'text-red-500 text-xs mt-1'

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h4 className="font-semibold text-green-800 mb-1">Message envoyé !</h4>
        <p className="text-green-700 text-sm">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={compact ? '' : 'grid md:grid-cols-2 gap-4'}>
        <div>
          <label className={labelStyles}>Nom complet *</label>
          <input
            type="text"
            className={inputStyles}
            placeholder="Votre nom"
            {...register('name', { required: 'Ce champ est obligatoire' })}
          />
          {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
        </div>

        <div>
          <label className={labelStyles}>Téléphone *</label>
          <input
            type="tel"
            className={inputStyles}
            placeholder="06 XX XX XX XX"
            {...register('phone', {
              required: 'Ce champ est obligatoire',
              pattern: {
                value: /^[\d\s+()-]+$/,
                message: 'Numéro de téléphone invalide'
              }
            })}
          />
          {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelStyles}>Email *</label>
        <input
          type="email"
          className={inputStyles}
          placeholder="votre@email.fr"
          {...register('email', {
            required: 'Ce champ est obligatoire',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Adresse email invalide'
            }
          })}
        />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>

      {!compact && (
        <div>
          <label className={labelStyles}>Sujet</label>
          <select
            className={inputStyles}
            {...register('subject')}
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="devis">Demande de devis</option>
            <option value="info">Demande d'information</option>
            <option value="rdv">Prise de rendez-vous</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      )}

      <div>
        <label className={labelStyles}>Message *</label>
        <textarea
          rows={compact ? 3 : 5}
          className={inputStyles}
          placeholder="Décrivez votre projet..."
          {...register('message', { required: 'Ce champ est obligatoire' })}
        />
        {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Envoi en cours...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Envoyer le message
          </span>
        )}
      </Button>
    </form>
  )
}
