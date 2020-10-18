class survey {
  componentDidMount(tier) {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "Purchase", { currency: "USD", value: tier })
      }
    }
  }
}
export default survey
