import { motion } from 'motion/react';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useContactForm } from '@/hooks/useContactForm';
import { contactInfoData, projectTypes } from '@/constants/contact';

const iconMap = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin
};

export function Contact() {
  const { isDark } = useTheme();
  const { register, handleSubmit, errors, isSubmitted } = useContactForm();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p
            className="uppercase tracking-[0.22em] mb-4"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontSize: '0.75rem',
              color: isDark ? 'rgba(233, 213, 255, 0.45)' : 'rgba(59, 47, 99, 0.62)'
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: isDark ? '#F8F5FF' : '#241B42'
            }}
          >
            Let's Create Something Amazing
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: '1.75rem',
                fontWeight: 650,
                color: isDark ? '#F8F5FF' : '#241B42'
              }}
            >
              Get in Touch
            </h3>
            <p
              className="mb-8"
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
              }}
            >
              Ready to transform your content? Send us a message and let's discuss how we can bring your creative vision to life.
            </p>

            <div className="space-y-6">
              {contactInfoData.map((info, index) => {
                const IconComponent = iconMap[info.iconKey];

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isDark
                          ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(168, 85, 247, 0.2))'
                          : 'linear-gradient(135deg, rgba(91, 33, 182, 0.1), rgba(124, 58, 237, 0.1))',
                        border: isDark
                          ? '1px solid rgba(124, 58, 237, 0.3)'
                          : '1px solid rgba(91, 33, 182, 0.2)'
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: isDark ? '#A855F7' : '#7C3AED' }}
                        />
                      )}
                    </div>
                    <div>
                      <div
                        className="mb-1"
                        style={{
                          fontSize: '0.875rem',
                          color: isDark ? 'rgba(233, 213, 255, 0.45)' : 'rgba(59, 47, 99, 0.62)'
                        }}
                      >
                        {info.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Clash Display', sans-serif",
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: isDark ? '#F8F5FF' : '#241B42'
                        }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {isSubmitted ? (
              <div
                className="p-12 rounded-2xl text-center"
                style={{
                  background: isDark
                    ? 'rgba(124, 58, 237, 0.08)'
                    : 'rgba(124, 58, 237, 0.04)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  backdropFilter: 'blur(16px)'
                }}
              >
                <CheckCircle2
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: isDark ? '#A855F7' : '#7C3AED' }}
                />
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 650,
                    color: isDark ? '#F8F5FF' : '#241B42'
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all duration-200"
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(91, 33, 182, 0.08)',
                      color: isDark ? '#F8F5FF' : '#241B42',
                      backdropFilter: 'blur(16px)'
                    }}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all duration-200"
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(91, 33, 182, 0.08)',
                      color: isDark ? '#F8F5FF' : '#241B42',
                      backdropFilter: 'blur(16px)'
                    }}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all duration-200"
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(91, 33, 182, 0.08)',
                      color: isDark ? '#F8F5FF' : '#241B42',
                      backdropFilter: 'blur(16px)'
                    }}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block mb-2"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType', { required: 'Please select a project type' })}
                    className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all duration-200"
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(91, 33, 182, 0.08)',
                      color: isDark ? '#F8F5FF' : '#241B42',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <option value="">Select a service</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all duration-200 resize-none"
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(91, 33, 182, 0.08)',
                      color: isDark ? '#F8F5FF' : '#241B42',
                      backdropFilter: 'blur(16px)'
                    }}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium transition-all duration-250 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
                    color: '#ffffff',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)'
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
