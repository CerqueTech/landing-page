import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import './ContactForm.css';

const ContactFormSection = () => {
  const formRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  useEffect(() => {
    emailjs.init('-FHCpc8dqO74zCggh');
  }, []);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!captchaValue) {
      alert('Por favor, resuelve el CAPTCHA.');
      return;
    }

    emailjs.sendForm('service_jzbyr2g', 'template_nx3hy1l', formRef.current)
      .then(() => {
        console.log('SUCCESS!');
        formRef.current.reset();
        setCaptchaValue(null); // Reset CAPTCHA
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      });
  };

  return (
    <section className="contact_form_section">
      <div className="container">
        <div className="contact_form_boxed bg_primary decoration_wrap">
          <div className="contact_form p-0 bg-transparent rounded-0">
            <div className="section_heading text-white">
              <h2 className="heading_subtitle text-uppercase">
                <span className="double_icon">
                  <i className="fas fa-sharp fa-square-full"></i>
                  <i className="fas fa-sharp fa-square-full"></i>
                </span>
                <span>Contactenos</span>
              </h2>
              <h3 className="heading_title">Ponete en contacto</h3>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="cellphone"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group select">
                    <select
                      className="form-control"
                      id="subjectSelect"
                      name="subject"
                      style={{ height: '60px' }}
                    >
                      <option value="" defaultValue={""} disabled>Seleccionar Asunto</option>
                      <option value="web-development">Desarrollo Web</option>
                      <option value="mobile-app"
                      >Desarrollo de Aplicaciones Móviles</option
                      >
                      <option value="cloud-solutions">Soluciones en la Nube</option>
                      <option value="devops">DevOps y Automatización</option>
                      <option value="microservices"
                      >Arquitectura de Microservicios</option
                      >
                      <option value="cybersecurity"
                      >Consultoría en Ciberseguridad</option
                      >
                      <option value="data-analytics">Análisis de Datos</option>
                      <option value="ai-ml">IA & Aprendizaje Automático</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Escribe tu mensaje"></textarea>
                </div>
              </div>
              <ReCAPTCHA
                sitekey="6LcR3VIpAAAAAIrEQNSLspAIsWliq76GBc4RP675"
                onChange={onCaptchaChange}
              />
              <div className="col-12 text-center">
                <button type="submit" className="bd-btn-link btn_warning">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Enviar ahora</span>
                        <span className="bd-button-text">Enviar ahora</span>
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="deco_item shape_1">
            <img src="assets/images/shapes/shape_comment.png" className="img-fluid" />
          </div>
          <div className="deco_item shape_2">
            <img src="assets/images/shapes/shape_man_1.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

