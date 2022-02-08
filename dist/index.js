import LinkedInModal from "../lib/index";
import { LinkedInToken, ErrorType, cleanUrlString, getCodeAndStateFromUrl,getErrorFromUrl,transformError, isErrorUrl, injectedJavaScript, getAuthorizationUrl, getPayloadForToken, fetchToken, logError, onLoadStart } from "../lib/index";

export default LinkedInModal;
export {LinkedInToken, ErrorType, cleanUrlString, getCodeAndStateFromUrl,getErrorFromUrl,transformError, isErrorUrl, injectedJavaScript, getAuthorizationUrl, getPayloadForToken, fetchToken, logError, onLoadStart  };