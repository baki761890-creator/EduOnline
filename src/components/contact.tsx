import React, {
  useRef,
  useState,

 type FormEvent,
  type ChangeEvent,
} from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* ===== FORM DATA TYPE ===== */
interface FormData {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
  text?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    text: '',
  });

  const form = useRef<HTMLFormElement | null>(null);

  /* ===== INPUT CHANGE ===== */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ===== SEND EMAIL ===== */
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { user_name, user_email, user_phone, message } = formData;

    if (!user_name || !user_email || !user_phone || !message) {
      toast.error('❌ Iltimos, barcha maydonlarni to‘ldiring!');
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_d36lzv4',
        'template_bayn3or',
        form.current,
        {
          publicKey: 'g_aq-uDeSczFuOdtD',
        }
      )
      .then(
        () => {
          toast.success('✅ Xabar muvaffaqiyatli yuborildi!');
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            message: '',
            text: '',
          });
        },
        (error: { text: string }) => {
          toast.error(`❌ Xabar yuborilmadi: ${error.text}`);
        }
      );
  };

  return (
    <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Biz bilan <span className="text-yellow-300">bog‘laning</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT INFO */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-300 text-2xl" />
              <p>+998 93 571 26 02</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-300 text-2xl" />
              <p>info@eduonline.uz</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-300 text-2xl" />
              <p>Andijon viloyati, Baliqchi tumani, Startum School</p>
            </div>
          </div>

          {/* FORM */}
          <div className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Ismingiz"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/20 text-white"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email manzilingiz"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/20 text-white"
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Telefon raqamingiz"
                value={formData.user_phone}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/20 text-white"
              />

              <textarea
                rows={4}
                name="message"
                placeholder="Xabaringiz"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/20 text-white resize-none"
              />

              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 py-3 rounded-md hover:bg-yellow-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;