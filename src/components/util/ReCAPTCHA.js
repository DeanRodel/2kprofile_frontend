import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect } from "react";

const ReCAPTCHA = (props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
    props.setRecaptchaToken(token);
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  // useEffect(() => {
  //   handleReCaptchaVerify();
  // }, [handleReCaptchaVerify]);

  return <button className={props.className} type={props.type} onClick={()=>handleReCaptchaVerify()}>{props.value}</button>;
};

export default ReCAPTCHA;
