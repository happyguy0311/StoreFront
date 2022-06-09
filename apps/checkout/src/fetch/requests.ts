import { FetchResponse } from "@/checkout/hooks/useFetch";
import { envVars } from "@/checkout/lib/utils";
import { AppConfig } from "@/checkout/providers/AppConfigProvider/types";
import { PayRequestBody } from "checkout-app/types/api/pay";

export const getPaymentProviders = () =>
  fetch(`${envVars.checkoutAppUrl}/active-payment-providers/channel-1`);

export interface PayResult {
  orderId: string;
  data: {
    paymentUrl: string;
  };
}

export const pay = (body: PayRequestBody): FetchResponse<PayResult> =>
  fetch(`${envVars.checkoutAppUrl}/pay`, {
    method: "POST",
    body: JSON.stringify(body),
  });

export const getAppConfig = (): FetchResponse<AppConfig> =>
  fetch(`${envVars.checkoutAppUrl}/customization-settings`);
