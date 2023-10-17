class Formatter {
  static #dateTimeOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  static priceFormatter(price) {
    return Number(price.replace("R", "")).toLocaleString();
    // return Intl.NumberFormat("fa-IR", { style: "currency", currency: "IRR" }).format(
    //   price.replace("R", ""),
    // ),
  }

  static dateTimeFormatter(dateTime) {
    return Intl.DateTimeFormat("fa-IR", this.#dateTimeOptions).format(
      new Date(dateTime)
    );
  }

  static weightFormatter(weight) {
    return `${Number(weight.replace("gr", "")).toLocaleString()} گرم`;
  }

  static voltFormmater(volt) {
    return `${Number(volt.replace("V", "")).toLocaleString()} ولت`;
  }
}

export default Formatter;
