/**
 * Created by Ryan Balieiro on 03.02.2025
 */
export function useSettings() {
    /**
     * @return {boolean}
     */
    const getLoaderEnabled = () => {
      /**
       * 如果想在调整期间暂时停用预加载动画,return false
       */
        return true
    }

    /**
     * @return {{publicKey: string, serviceId: string, templateId: string}}
     */
    const getCredentialsForEmailJS = () => {
        return {
            publicKey: "TESKiWX7B5ldpdVVv",
            serviceId: "service_w5wf82t",
            templateId: "template_07ht8fn"
        }
    }

    return {
        getLoaderEnabled,
        getCredentialsForEmailJS
    }
}