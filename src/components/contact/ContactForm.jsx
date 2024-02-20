import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import MySnackbar from "./Snackbar";
import "./ContactForm.css";
import getData from "../../services/data";
const ContactFormSection = (props) => {
  const [data, setData] = useState({});
  const formRef = useRef();
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [snackbarConfig, setSnackbarConfig] = useState({
    showSnackbar: false,
    showErrorSnackbar: false,
    swapError: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSnackbarErrorClose = () => {
    setSnackbarConfig({ ...snackbarConfig, showErrorSnackbar: false });
  };
  const handleSnackbarClose = () => {
    setSnackbarConfig({ ...snackbarConfig, showSnackbar: false });
  };
  const resetState = () => {
    setSnackbarConfig({
      showSnackbar: false,
      showErrorSnackbar: false,
      swapError: false,
    });
  };

  useEffect(() => {
    emailjs.init("-FHCpc8dqO74zCggh");
    const fetchData = async () => {
      const result = await getData(`${props.lang}/contact/contactform`);
      setData(result);
    };
    fetchData();
  }, []);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const onSubmit = async (data) => {
    if (!captchaValue) {
      setSnackbarConfig({
        ...snackbarConfig,
        swapError: true,
        showErrorSnackbar: true,
      });
      return;
    }

    try {
      await emailjs.sendForm(
        "service_jzbyr2g",
        "template_nx3hy1l",
        formRef.current
      );
      setSnackbarConfig({ ...snackbarConfig, showSnackbar: true });
      reset();
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      setSnackbarConfig({ ...snackbarConfig, showErrorSnackbar: true });
    }
  };

  return (
    <div className="container">
      <div className="snackbars">
        {snackbarConfig.showSnackbar ? (
          <MySnackbar
            alertTitle={data.snackTitle}
            autoHideDuration={3000}
            message={data.snackMsg}
            severity="success"
            onClose={handleSnackbarClose}
          />
        ) : null}
        {snackbarConfig.showErrorSnackbar ? (
          <MySnackbar
            alertTitle={data.snack1Title}
            autoHideDuration={3000}
            message={
              snackbarConfig.swapError
                ? `${data.snack1Msg1}`
                : `${data.snackMsg2}`
            }
            severity="error"
            onClose={handleSnackbarErrorClose}
          />
        ) : null}
      </div>
      <div className="contact_form_boxed bg_primary decoration_wrap">
        <div className="contact_form p-0 bg-transparent rounded-0">
          <div className="section_heading text-white">
            <h2 className="heading_subtitle text-uppercase">
              <span className="double_icon">
                <i className="fas fa-sharp fa-square-full"></i>
                <i className="fas fa-sharp fa-square-full"></i>
              </span>
              <span className="span">{data.span}</span>
            </h2>
            <h3 className="heading_title">{data.h3}</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    placeholder={data.placeHolderName}
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: `${data.msgName}`,
                      },
                      minLength: {
                        value: 3,
                        message: `${data.msg1Name}`,
                      },
                      maxLength: {
                        value: 20,
                        message: `${data.msg2Name}`,
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: `${data.msg3Name}`,
                      },
                    })}
                  />
                  {errors.firstname && <span>{errors.firstname.message}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    placeholder={data.placeHolderLastName}
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: `${data.msgLastName}`,
                      },
                      minLength: {
                        value: 3,
                        message: `${data.msg1LastName}`,
                      },
                      maxLength: {
                        value: 20,
                        message: `${data.msg2LastName}`,
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: `${data.msg3LastName}`,
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
                    placeholder={data.placeHolderTel}
                    {...register("cellphone", {
                      required: {
                        value: true,
                        message: `${data.msgTel}`,
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: `${data.msg1Tel}`,
                      },
                    })}
                  />
                  {errors.cellphone && <span>{errors.cellphone.message}</span>}
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
                      {data.select1}
                    </option>
                    <option value="web-development">{data.select2}</option>
                    <option value="mobile-app">{data.select3}</option>
                    <option value="cloud-solutions">{data.select4}</option>
                    <option value="devops">{data.select5}</option>
                    <option value="microservices">{data.select6}</option>
                    <option value="cybersecurity">{data.select7}</option>
                    <option value="data-analytics">{data.select8}</option>
                    <option value="ai-ml">{data.select9}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder={data.placeHolderMsg}
                  {...register("message", {
                    required: {
                      value: true,
                      message: `${data.msgMsg}`,
                    },
                    minLength: {
                      value: 5,
                      message: `${data.msg1Msg}`,
                    },
                  })}
                ></textarea>
                {errors.message && <span>{errors.message.message}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcR3VIpAAAAAIrEQNSLspAIsWliq76GBc4RP675"
                  onChange={onCaptchaChange}
                  size="normal"
                  hl={props.lang}
                />
              </div>
              <div className="col-md-6 mb-3">
                <button
                  type="submit"
                  className="bd-btn-link btn_warning m-2"
                  onClick={resetState}
                >
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long dark"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">
                          {data.bttnTxt}
                        </span>
                        <span className="bd-button-text">
                          {data.bttnTxt}
                        </span>
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
            src="/assets/images/shapes/shape_comment.png"
            className="img-fluid"
          />
        </div>
        <div className="deco_item shape_2">
          <img
            src="/assets/images/shapes/shape_man_1.png"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
