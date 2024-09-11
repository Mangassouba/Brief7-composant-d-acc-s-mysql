const customerModule = require("./customerModule");
const productModule = require("./productModule");
const orderModule = require("./orderModule");
const paymentModule = require("./paymentModule");
const readlineSync = require("readline-sync");

function mainMenu() {
  console.log("\n***** MENU PRINCIPAL *****");
  console.log("1. Gérer les clients");
  console.log("2. Gérer les produits");
  console.log("3. Gérer les commandes d'achat");
  console.log("4. Gérer les paiements");
  console.log("0. Quitter");
  const choice = readlineSync.question("Votre choix: ");
  return choice;
}


// Submenu for managing customers
function customerMenu() {
  console.log("\n***** GESTION DES CLIENTS *****");
  console.log("1. Ajouter un client");
  console.log("2. Lister tous les clients");
  console.log("3. Mettre à jour les informations d'un client");
  console.log("4. Supprimer un client");
  console.log("0. Retourner au menu principal");
  const choice = readlineSync.question("Votre choix: ");
  return choice;
}

// Submenu for managing products
function productMenu() {
  console.log("\n***** GESTION DES PRODUITS *****");
  console.log("1. Ajouter un produit");
  console.log("2. Lister tous les produits");
  console.log("3. Mettre à jour les informations d'un produit");
  console.log("4. Supprimer un produit");
  console.log("0. Retourner au menu principal");
  const choice = readlineSync.question("Votre choix : ");
  return choice;
}

// Submenu for managing purchase orders
function purchaseMenu() {
  console.log("\n***** PURCHASE ORDER MANAGEMENT *****");
  console.log("1. Add a purchase order");
  console.log("2. List all purchase orders");
  console.log("3. Update purchase order information");
  console.log("4. Delete a purchase order");
  console.log("0. Return to main menu");
  const choice = readlineSync.question("Your choice: ");
  return choice;
}

// Submenu for managing payments
function paymentMenu() {
  console.log("\n***** GESTION DES PAIEMENTS *****");
  console.log("1. Ajouter un paiement");
  console.log("2. Lister tous les paiements");
  console.log("3. Mettre à jour les informations d'un paiement");
  console.log("4. Supprimer un paiement");
  console.log("0. Retourner au menu principal");
  const choice = readlineSync.question("Votre choix: ");
  return choice;
}

async function main() {
  try {
    let mainChoice = mainMenu();
    while (mainChoice !== "0") {
      switch (mainChoice) {
        // Customer Management
        case "1":
          let customerChoice = customerMenu();
          while (customerChoice !== "0") {
            switch (customerChoice) {
              case "1":
                const name = readlineSync.question("Entrez le nom : ");
                const address = readlineSync.question(
                  "Entrez votre address : "
                );
                const email = readlineSync.question("Entrez votre email : ");
                const phone = readlineSync.question(
                  "Entre votre numero de telephone : "
                );
                await customerModule.addCustomer(name, address, email, phone);
                console.log("client ajouté avec succès !");
                break;
              case "2":
                const list = await customerModule.get();
                console.log(list);
                break;
              case "3":
                const id = readlineSync.question("Entrez id : ");
                const namen = readlineSync.question("Entrez le nom : ");
                const addres = readlineSync.question("Entrez votre address : ");
                const emails = readlineSync.question("Entrez votre email : ");
                const phonee = readlineSync.question(
                  "Entre votre numero de telephone : "
                );
                await customerModule.updateCustomer(
                  id,
                  namen,
                  addres,
                  emails,
                  phonee
                );
                console.log("client ajouté avec succès !");
                break;
              case "4":
                const deleteId = readlineSync.questionInt(
                  "Entrez l'id du client à supprimer: "
                );
                const deleteResult = await customerModule.destroyCustomer(
                  deleteId
                );
                // console.log(`Number of rows deleted: ${deleteResult}`);
                break;
              default:
                console.log("Invalid option");
                break;
            }
            customerChoice = customerMenu();
          }
          break;

        // Product Management
        case "2":
          let productChoice = productMenu();
          while (productChoice !== "0") {
            switch (productChoice) {
              case "1":
                const nameProduct = readlineSync.question(
                  "Entrez nom d'un produit : "
                );
                const description = readlineSync.question(
                  "Entrez la description: "
                );
                const price = readlineSync.questionFloat("Entrez le prix : ");
                const stock = readlineSync.questionInt("Entre stock : ");
                const category = readlineSync.question("Entre la categorie: ");
                const borcode = readlineSync.question("Entre la bar code: ");
                const status = readlineSync.question("Entre le status : ");
                await productModule.addProduct(
                  nameProduct,
                  description,
                  price,
                  stock,
                  category,
                  borcode,
                  status
                );
                console.log("produits ajouter avec succés");
                break;
              case "2":
                const list = await productModule.get();
                console.log(list);
                break;
              case "3":
                const productId = readlineSync.question("Entrez id : ");
                const nameProducts = readlineSync.question(
                  "Entrez nom d'un produit : "
                );
                const descriptions = readlineSync.question(
                  "Entrez la description: "
                );
                const prices = readlineSync.questionFloat("Entrez le prix : ");
                const stocks = readlineSync.questionInt("Entre stock : ");
                const categorys = readlineSync.question("Entre la categorie: ");
                const borcodes = readlineSync.question("Entre la bar code: ");
                const statu = readlineSync.question("Entre le status : ");
                await productModule.updateProduct(
                  productId,
                  nameProducts,
                  descriptions,
                  prices,
                  stocks,
                  categorys,
                  borcodes,
                  statu
                );
                console.log("update succe");
                break;
              case "4":
                idp = readlineSync.questionInt("Supprimer un produits: ");
                // console.log(idp);

                await productModule.destroyProduct(idp);
                break;
              default:
                console.log("Invalid option");
                break;
            }
            productChoice = productMenu();
          }
          break;

        // Purchase Order Management
        case "3":
          let purchaseChoice = purchaseMenu();
          while (purchaseChoice !== "0") {
            switch (purchaseChoice) {
              case "1":
                const orderDate = readlineSync.question(
                  "Enter the order date (YYYY-MM-DD): "
                );
                const deliveryAddress = readlineSync.question(
                  "Enter the delivery address: "
                );
                const customerId = readlineSync.questionInt(
                  "Enter the customer ID: "
                );
                const trackNumber = readlineSync.question(
                  "Enter the track number: "
                );
                const orderStatus = readlineSync.question(
                  "Enter the order status: "
                );
                const orderId = await orderModule.addOrder(
                  orderDate,
                  deliveryAddress,
                  customerId,
                  trackNumber,
                  orderStatus
                );
                console.log(`Purchase order added with ID: ${orderId}`);
                break;
              case "2":
                const orders = await orderModule.get();
                console.log("List of purchase orders:");
                console.log(orders);
                break;
              case "3":
                const updateOrderId = readlineSync.questionInt(
                  "Enter the ID of the purchase order to update: "
                );
                const newOrderDate = readlineSync.question(
                  "Enter the new order date (YYYY-MM-DD): "
                );
                const newDeliveryAddress = readlineSync.question(
                  "Enter the new delivery address: "
                );
                const newCustomerId = readlineSync.questionInt(
                  "Enter the new customer ID: "
                );
                const newTrackNumber = readlineSync.question(
                  "Enter the new track number: "
                );
                const newOrderStatus = readlineSync.question(
                  "Enter the new order status: "
                );
                const updateOrderResult = await orderModule.updateOrder(
                  updateOrderId,
                  newOrderDate,
                  newDeliveryAddress,
                  newCustomerId,
                  newTrackNumber,
                  newOrderStatus
                );
                console.log(`Number of rows updated: ${updateOrderResult}`);
                break;
              case "4":
                const deleteOrderId = readlineSync.questionInt(
                  "Enter the ID of the purchase order to delete: "
                );
                const deleteOrderResult = await orderModule.destroyOrder(
                  deleteOrderId
                );
                console.log(`Number of rows deleted: ${deleteOrderResult}`);
                break;
              default:
                console.log("Invalid option");
                break;
            }
            purchaseChoice = purchaseMenu();
          }
          break;

        // Payment Management
        case "4":
          let paymentChoice = paymentMenu();
          while (paymentChoice !== "0") {
            switch (paymentChoice) {
              case "1":
                const paymentDate = readlineSync.question(
                  "Enter the payment date (YYYY-MM-DD): "
                );
                const amount = readlineSync.questionFloat("Enter the amount: ");
                const paymentMethod = readlineSync.question(
                  "Enter the payment method: "
                );
                const paymentOrderId = readlineSync.questionInt(
                  "Enter the order ID: "
                );
                const paymentId = await paymentModule.addPayment(
                  paymentDate,
                  amount,
                  paymentMethod,
                  paymentOrderId
                );
                console.log(`Payment added with ID: ${paymentId}`);
                break;
              case "2":
                const payments = await paymentModule.get();
                console.log("List of payments:");
                console.log(payments);
                break;
              case "3":
                const updatePaymentId = readlineSync.questionInt(
                  "Enter the ID of the payment to update: "
                );
                const newPaymentDate = readlineSync.question(
                  "Enter the new payment date (YYYY-MM-DD): "
                );
                const newAmount = readlineSync.questionFloat(
                  "Enter the new amount: "
                );
                const newPaymentMethod = readlineSync.question(
                  "Enter the new payment method: "
                );
                const newOrderId = readlineSync.questionInt(
                  "Enter the new order ID: "
                );
                const updatePaymentResult = await paymentModule.updatePayment(
                  updatePaymentId,
                  newPaymentDate,
                  newAmount,
                  newPaymentMethod,
                  newOrderId
                );
                console.log(`Number of rows updated: ${updatePaymentResult}`);
                break;
              case "4":
                const deletePaymentId = readlineSync.questionInt(
                  "Enter the ID of the payment to delete: "
                );
                const deletePaymentResult = await paymentModule.destroyPayment(
                  deletePaymentId
                );
                console.log(`Number of rows deleted: ${deletePaymentResult}`);
                break;
              default:
                console.log("Invalid option");
                break;
            }
            paymentChoice = paymentMenu();
          }
          break;

        default:
          console.log("Invalid option");
          break;
      }
      mainChoice = mainMenu();
    }
    console.log("Exiting...");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
