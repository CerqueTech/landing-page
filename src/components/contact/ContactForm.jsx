import "./ContactForm.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MySnackbar from "./Snackbar";

const ContactFormSection = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const handleSnackbarErrorClose = () => {
    setShowErrorSnackbar(false);
  };
  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);
  useEffect(() => {
    emailjs.init("-FHCpc8dqO74zCggh");
  }, []);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const onSubmit = (data) => {
    if (!captchaValue) {
      alert("Por favor, resuelve el CAPTCHA.");
      return;
    }
    emailjs
      .sendForm("service_jzbyr2g", "template_nx3hy1l", formRef.current)
      .then(() => {
        setShowSnackbar(true);
        console.log("SUCCESS!");
        reset();
        setCaptchaValue(null);
      })
      .catch((error) => {
        setShowErrorSnackbar(true);
        alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
      });
  };

  return (
    <section className="contact_form_section">
      <div className="snackbars">
        {showSnackbar ? (
          <MySnackbar
            alertTitle="Success"
            autoHideDuration={2000}
            message="Enviado correctamente"
            severity="success"
            onClose={handleSnackbarClose}
          />
        ) : null}
        {showSnackbar ? (
          <MySnackbar
            alertTitle="Error"
            autoHideDuration={2000}
            message="rror al enviar el mensaje. Por favor, intenta nuevamente."
            severity="error"
            onClose={handleSnackbarErrorClose}
          />
        ) : null}
      </div>
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
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      placeholder="Nombre"
                      {...register("firstname", {
                        required: {
                          value: true,
                          message: "Nombre es requerido",
                        },
                        minLength: {
                          value: 3,
                          message: "Nombre debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "Nombre debe tener máximo 20 caracteres",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Solo se permiten letras en el nombre",
                        },
                      })}
                    />
                    {errors.firstname && (
                      <span>{errors.firstname.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      placeholder="Apellido"
                      {...register("lastname", {
                        required: {
                          value: true,
                          message: "Nombre es requerido",
                        },
                        minLength: {
                          value: 3,
                          message: "Nombre debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "Nombre debe tener máximo 20 caracteres",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Solo se permiten letras en el apellido",
                        },
                      })}
                    />
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="cellphone"
                      placeholder="Telefono"
                      {...register("cellphone", {
                        required: {
                          value: true,
                          message: "Telefono es requerido",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Solo se permiten números",
                        },
                      })}
                    />
                    {errors.cellphone && (
                      <span>{errors.cellphone.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group select">
                    <select
                      className="form-control"
                      id="subjectSelect"
                      name="subject"
                      style={{ height: "60px" }}
                      {...register("subjectSelect")}
                    >
                      <option value="" defaultValue={""} disabled>
                        Seleccionar Asunto
                      </option>
                      <option value="web-development">Desarrollo Web</option>
                      <option value="mobile-app">
                        Desarrollo de Aplicaciones Móviles
                      </option>
                      <option value="cloud-solutions">
                        Soluciones en la Nube
                      </option>
                      <option value="devops">DevOps y Automatización</option>
                      <option value="microservices">
                        Arquitectura de Microservicios
                      </option>
                      <option value="cybersecurity">
                        Consultoría en Ciberseguridad
                      </option>
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
                    placeholder="Escribe tu mensaje"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "El mensaje es requerido",
                      },
                      minLength: {
                        value: 5,
                        message: "El minimo de caracteres es 5",
                      },
                    })}
                  ></textarea>
                  {errors.message && <span>{errors.message.message}</span>}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <ReCAPTCHA
                    sitekey="6LcR3VIpAAAAAIrEQNSLspAIsWliq76GBc4RP675"
                    onChange={onCaptchaChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <button type="submit" className="bd-btn-link btn_warning m-2">
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
              </div>
            </form>
          </div>
          <div className="deco_item shape_1">
            <img
              src="assets/images/shapes/shape_comment.png"
              className="img-fluid"
            />
          </div>
          <div className="deco_item shape_2">
            <img
              src="assets/images/shapes/shape_man_1.png"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
