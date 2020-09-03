import React /*, { useEffect }*/ from "react"
// import { Link } from "gatsby"
import "./buybutton.css"

/*
function go(btnid) {
  var client = window.ShopifyBuy.buildClient({
    domain: "jailbird-game.myshopify.com",
    storefrontAccessToken: "da6dee8f151e95f9d41046af66b34164",
  })
  window.ShopifyBuy.UI.onReady(client).then(function(ui) {
    ui.createComponent("product", {
      id: "5396692795557",
      node: document.getElementById(btnid),
      moneyFormat: "%24%7B%7Bamount%7D%7D",
      options: {
        product: {
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
              },
            },
            button: {
              "font-family": "McLaren, sans-serif",
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              border: "transparent 2px",
              ":hover": {
                "background-color": "#e57b03",
                border: "black 2px",
              },
              "background-color": "#fe8903",
              ":focus": {
                "background-color": "#e57b03",
              },
            },
            quantityInput: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
            },
          },
          buttonDestination: "checkout",
          contents: {
            img: false,
            title: false,
            price: false,
          },
          text: {
            button: "Buy now",
          },
        },
        productSet: {
          styles: {
            products: {
              "@media (min-width: 601px)": {
                "margin-left": "-20px",
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            button: {
              "font-family": "Arial, sans-serif",
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": {
                "background-color": "#e57b03",
              },
              "background-color": "#fe8903",
              ":focus": {
                "background-color": "#e57b03",
              },
            },
            quantityInput: {
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
            },
          },
          text: {
            button: "Add to cart",
          },
        },
        cart: {
          styles: {
            button: {
              "font-family": "Arial, sans-serif",
              "font-size": "18px",
              "padding-top": "17px",
              "padding-bottom": "17px",
              ":hover": {
                "background-color": "#e57b03",
              },
              "background-color": "#fe8903",
              ":focus": {
                "background-color": "#e57b03",
              },
            },
          },
          text: {
            total: "Subtotal",
            button: "Checkout",
          },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: {
              "font-family": "McLaren, sans-serif",
              "background-color": "#fe8903",
              border: "transparent 2px",
              ":hover": {
                "background-color": "#e57b03",
                border: "black 2px",
              },
              ":focus": {
                "background-color": "#e57b03",
              },
            },
            count: {
              "font-size": "18px",
            },
          },
        },
      },
    })
  })

export default ({ btnid }) => {
  useEffect(() => go(btnid), [btnid])
  return <div id={btnid}></div>
}
*/

export default class redirectButton extends React.Component {
  render() {
    return (
      <div>
        <a
          href="https://www.kickstarter.com/projects/jailbird/jailbird"
          className="header__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="buttonContainer">Back us on Kickstarter</button>
        </a>
      </div>
    )
  }
}
