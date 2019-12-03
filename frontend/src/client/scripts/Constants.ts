import { EndpointProperties } from "@scsa/messaging";
import { cfg } from "../../config";

export const Applications = {
    MAIN: new EndpointProperties(
        cfg.CURRENT.options.text,
        cfg.CURRENT.options.href.href
    ),
    ACCOUNT: new EndpointProperties(
        cfg.APPLICATIONS.Account.options.text,
        cfg.APPLICATIONS.Account.options.href.href
    ),
    CATALOGUE: new EndpointProperties(
        cfg.APPLICATIONS.Catalogue.options.text,
        cfg.APPLICATIONS.Catalogue.options.href.href
    ),
    CHECKOUT: new EndpointProperties(
        cfg.APPLICATIONS.Checkout.options.text,
        cfg.APPLICATIONS.Checkout.options.href.href
    )
};
