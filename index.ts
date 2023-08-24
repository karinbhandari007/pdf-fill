import express, { Express } from "express";
import dotenv from "dotenv";
import { PDFDocument } from "pdf-lib";
import fs from "fs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const existingPdfPath =
  "./Florida-Residential-Purchase-And-Sale-Agreement-Realtor-Version.pdf";
const outputPdfPath = __dirname + "output.pdf";

const pdfFunc = async () => {
  const existingPdfBytes = fs.readFileSync(existingPdfPath);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pdfForm = pdfDoc.getForm();

  /************ FIRST PAGE ************/
  const seller = pdfForm.getTextField("PARTIES");
  const buyer = pdfForm.getTextField("and");
  const streetAddress = pdfForm.getTextField("a Street address city zip");
  const locatedIn = pdfForm.getTextField("b Located in");
  const legalDescription = pdfForm.getTextField(
    "c Real Property The legal description is"
  );
  const personalProperties = pdfForm.getTextField(
    "Other Personal Property items included in this purchase are 1"
  );
  const excludedPurchase = pdfForm.getTextField(
    "e The following items are excluded from the purchase"
  );
  const purchasePrice = pdfForm.getTextField("undefined");
  const initialDeposit = pdfForm.getTextField("undefined_2");
  const isToBeMade = pdfForm.getTextField("is to be made within");
  const escrowAgentName = pdfForm.getTextField("Escrow Agent Information Name");
  const escrowAgentAddress = pdfForm.getTextField("Address");
  const escrowAgentPhone = pdfForm.getTextField("Phone");
  const escrowAgentEmail = pdfForm.getTextField("Email");
  const escrowAgentFax = pdfForm.getTextField("Fax");
  const additionalDepositDate = pdfForm.getTextField("Text18");
  const additionalDeposit = pdfForm.getTextField("Text19");
  const loanAmount = pdfForm.getTextField("Text21");
  const otherAmount = pdfForm.getTextField("d Other");
  const collectedFunds = pdfForm.getTextField("Text24");
  const beforeDate = pdfForm.getTextField("Text25");
  const closingDate = pdfForm.getTextField("Text26");
  const buyersInitialPage1 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x"
  );
  const buyerClosingDatePage1 = pdfForm.getTextField(
    "Rev619  2017 Florida Realtors and The Florida Bar All rights reserved"
  );
  const sellersInitialPage1 = pdfForm.getTextField("Sellers Initials");
  const sellerClosingDatePage1 = pdfForm.getTextField(
    "Closing Date at the time established by the Closing Agent"
  );

  seller.setText("1");
  buyer.setText("2");
  streetAddress.setText("3");
  locatedIn.setText("4");
  legalDescription.setText("5");
  personalProperties.setText("6");
  excludedPurchase.setText("7");
  purchasePrice.setText("8");
  initialDeposit.setText("9");
  isToBeMade.setText("10");
  escrowAgentName.setText("11");
  escrowAgentAddress.setText("12");
  escrowAgentPhone.setText("13");
  escrowAgentEmail.setText("14");
  escrowAgentFax.setText("15");
  additionalDepositDate.setText("16");
  additionalDeposit.setText("17");
  loanAmount.setText("18");
  otherAmount.setText("19");
  collectedFunds.setText("20");
  beforeDate.setText("21");
  closingDate.setText("22");
  buyersInitialPage1.setText("23");
  buyerClosingDatePage1.setText("24");
  sellersInitialPage1.setText("25");
  sellerClosingDatePage1.setText("26");

  /************ FIRST PAGE ************/

  /************ SECOND PAGE ************/
  const otherApproval = pdfForm.getTextField("Text27");
  const loanWithin = pdfForm.getTextField("Text28");
  const maxInitialInterestRate = pdfForm.getTextField("Text29");
  const termOf = pdfForm.getTextField("Text30");
  const financingWithIn = pdfForm.getTextField(
    "after Effective Date and use good faith and diligent effort to obtain approval of a loan meeting the Financing terms"
  );
  const buyersInitialPage2 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_2"
  );
  const buyerClosingDatePage2 = pdfForm.getTextField(
    "Rev619  2017 Florida Realtors and The Florida Bar All rights reserved_2"
  );
  const sellersInitialPage2 = pdfForm.getTextField("Sellers Initials_2");
  const sellerClosingDatePage2 = pdfForm.getTextField("undefined_3");

  otherApproval.setText("1");
  loanWithin.setText("2");
  maxInitialInterestRate.setText("3");
  termOf.setText("4");
  financingWithIn.setText("5");
  buyersInitialPage2.setText("6");
  buyerClosingDatePage2.setText("7");
  sellersInitialPage2.setText("8");
  sellerClosingDatePage2.setText("9");

  /************ SECOND PAGE ************/

  /************ THIRD PAGE ************/
  const costToBePaidBySeller = pdfForm.getTextField("Other");
  const generalRepairLimitInNumber = pdfForm.getTextField("Text31");
  const generalRepairLimitInPercentage = pdfForm.getTextField("Text32");
  const wdoLimitInNumber = pdfForm.getTextField("Text33");
  const wdoLimitInPercentage = pdfForm.getTextField("Text34");
  const permitLimitInNumber = pdfForm.getTextField(
    "expired building permits and obtaining required building permits for any existing improvement for which a"
  );
  const permitLimitInPercentage = pdfForm.getTextField("Text35");
  const costToBePaidByBuyer = pdfForm.getTextField("Other_2");
  const buyersInitialPage3 = pdfForm.getTextField(
    "Commitment and after Closing an owners policy of title insurance see STANDARD A for terms shall be"
  );
  const buyerClosingDatePage3 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_3"
  );
  const sellersInitialPage3 = pdfForm.getTextField("Sellers Initials_3");
  const sellerClosingDatePage3 = pdfForm.getTextField("undefined_4");

  costToBePaidBySeller.setText("1");
  generalRepairLimitInNumber.setText("2");
  generalRepairLimitInPercentage.setText("3");
  wdoLimitInNumber.setText("4");
  wdoLimitInPercentage.setText("5");
  permitLimitInNumber.setText("6");
  permitLimitInPercentage.setText("7");
  costToBePaidByBuyer.setText("8");
  buyersInitialPage3.setText("9");
  buyerClosingDatePage3.setText("10");
  sellersInitialPage3.setText("11");
  sellerClosingDatePage3.setText("12");

  /************ THIRD PAGE ************/

  /************ FORTH PAGE ************/
  const abstractContinuationAmount = pdfForm.getTextField(
    "if left blank then 20000 for abstract continuation or title search ordered or performed by Closing Agent"
  );
  const homeWarrantyPlan = pdfForm.getTextField(
    "warranty plan provides for repair or replacement of many of a homes mechanical systems and major builtin"
  );
  const homeWarrantyPlanLimit = pdfForm.getTextField("Text36");
  const buyersInitialPage4 = pdfForm.getTextField(
    "zone the Property is in whether flood insurance is required by Buyers lender and what restrictions apply to"
  );
  const buyerClosingDatePage4 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_4"
  );
  const sellersInitialPage4 = pdfForm.getTextField("Sellers Initials_4");
  const sellerClosingDatePage4 = pdfForm.getTextField("undefined_5");

  abstractContinuationAmount.setText("1");
  homeWarrantyPlan.setText("2");
  homeWarrantyPlanLimit.setText("3");
  buyersInitialPage4.setText("4");
  buyerClosingDatePage4.setText("5");
  sellersInitialPage4.setText("6");
  sellerClosingDatePage4.setText("7");

  /************ FORTH PAGE ************/

  /************ FIFTH PAGE ************/
  const inspectionPeriod = pdfForm.getTextField(
    "Period within which Buyer may at Buyers expense conduct General WDO and Permit Inspections"
  );
  const buyersInitialPage5 = pdfForm.getTextField(
    "Period inform Seller of any General Repair Items that are not in the condition required by bii below by"
  );
  const buyerClosingDatePage5 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_5"
  );
  const sellersInitialPage5 = pdfForm.getTextField("Sellers Initials_5");
  const sellerClosingDatePage5 = pdfForm.getTextField("undefined_6");

  inspectionPeriod.setText("1");
  buyersInitialPage5.setText("2");
  buyerClosingDatePage5.setText("3");
  sellersInitialPage5.setText("4");
  sellerClosingDatePage5.setText("5");
  /************ FIFTH PAGE ************/

  /************ SIXTH PAGE ************/
  const buyersInitialPage6 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_6"
  );
  const buyerClosingDatePage6 = pdfForm.getTextField(
    "Rev619  2017 Florida Realtors and The Florida Bar All rights reserved_3"
  );
  const sellersInitialPage6 = pdfForm.getTextField("Sellers Initials_6");
  const sellerClosingDatePage6 = pdfForm.getTextField("undefined_7");

  buyersInitialPage6.setText("1");
  buyerClosingDatePage6.setText("2");
  sellersInitialPage6.setText("3");
  sellerClosingDatePage6.setText("4");
  /************ SIXTH PAGE ************/

  /************ SEVENTH PAGE ************/
  const buyersInitialPage7 = pdfForm.getTextField(
    "or in any proceeding where Agent interpleads the subject matter of the escrow Agent shall recover reasonable"
  );
  const buyerClosingDatePage7 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_7"
  );
  const sellersInitialPage7 = pdfForm.getTextField("Sellers Initials_7");
  const sellerClosingDatePage7 = pdfForm.getTextField("undefined_8");

  buyersInitialPage7.setText("1");
  buyerClosingDatePage7.setText("2");
  sellersInitialPage7.setText("3");
  sellerClosingDatePage7.setText("4");
  /************ SEVENTH PAGE Information ************/

  /************ EIGHTH PAGE ************/
  const buyersInitialPage8 = pdfForm.getTextField(
    "conducting the mediation In any litigation permitted by this Contract the prevailing party shall be entitled to recover"
  );
  const buyerClosingDatePage8 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_8"
  );
  const sellersInitialPage8 = pdfForm.getTextField("Sellers Initials_8");
  const sellerClosingDatePage8 = pdfForm.getTextField("undefined_9");

  buyersInitialPage8.setText("1");
  buyerClosingDatePage8.setText("2");
  sellersInitialPage8.setText("3");
  sellerClosingDatePage8.setText("4");
  /************ EIGHTH PAGE ************/

  /************ NINTH PAGE ************/
  const buyersInitialPage9 = pdfForm.getTextField(
    "within 5 days after receipt of such information but no later than 5 days prior to Closing Date terminating this"
  );
  const buyerClosingDatePage9 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_9"
  );
  const sellersInitialPage9 = pdfForm.getTextField("Sellers Initials_9");
  const sellerClosingDatePage9 = pdfForm.getTextField("undefined_10");

  buyersInitialPage9.setText("1");
  buyerClosingDatePage9.setText("2");
  sellersInitialPage9.setText("3");
  sellerClosingDatePage9.setText("4");
  /************ NINTH PAGE ************/

  /************ TENTH PAGE ************/
  const buyersInitialPage10 = pdfForm.getTextField(
    "date of receipt of such notification to cure the defect 3 if Seller fails to timely cure the defect the Deposit and all"
  );
  const buyerClosingDatePage10 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_10"
  );
  const sellersInitialPage10 = pdfForm.getTextField("Sellers Initials_10");
  const sellerClosingDatePage10 = pdfForm.getTextField("undefined_11");

  buyersInitialPage10.setText("1");
  buyerClosingDatePage10.setText("2");
  sellersInitialPage10.setText("3");
  sellerClosingDatePage10.setText("4");
  /************ TENTH PAGE ************/

  /************ ELEVENTH PAGE ************/
  const buyersInitialPage11 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_11"
  );
  const buyerClosingDatePage11 = pdfForm.getTextField(
    "Rev619  2017 Florida Realtors and The Florida Bar All rights reserved_4"
  );
  const sellersInitialPage11 = pdfForm.getTextField("Sellers Initials_11");
  const sellerClosingDatePage11 = pdfForm.getTextField("undefined_12");

  buyersInitialPage11.setText("1");
  buyerClosingDatePage11.setText("2");
  sellersInitialPage11.setText("3");
  sellerClosingDatePage11.setText("4");
  /************ ELEVENTH PAGE ************/

  /************ TWELFTH PAGE ************/
  const otherAgendas = pdfForm.getTextField("Disclosure");
  const buyersInitialPage12 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_12"
  );
  const buyerClosingDatePage12 = pdfForm.getTextField(
    "Rev619  2017 Florida Realtors and The Florida Bar All rights reserved_5"
  );
  const sellersInitialPage12 = pdfForm.getTextField("Sellers Initials_12");
  const sellerClosingDatePage12 = pdfForm.getTextField("undefined_13");

  otherAgendas.setText("1");
  buyersInitialPage12.setText("2");
  buyerClosingDatePage12.setText("3");
  sellersInitialPage12.setText("4");
  sellerClosingDatePage12.setText("5");
  /************ TWELFTH PAGE ************/

  /************ THIRTEEN PAGE ************/
  const additionalTerms = pdfForm.getTextField("20 ADDITIONAL TERMS");

  const buyerCounterOfferOrRejection1 = pdfForm.getTextField("Text14");
  const buyerCounterOfferOrRejectionDate1 = pdfForm.getTextField("Date");

  const buyerCounterOfferOrRejection2 = pdfForm.getTextField("Text15");
  const buyerCounterOfferOrRejectionDate2 = pdfForm.getTextField("Date_2");

  const sellersCounterOfferOrRejection1 = pdfForm.getTextField("Text16");
  const buyerCounterOfferOrRejectionDate3 = pdfForm.getTextField("Date_3");

  const sellersCounterOfferOrRejection2 = pdfForm.getTextField("Text17");
  const buyerCounterOfferOrRejectionDate4 = pdfForm.getTextField("Date_4");

  const buyersAddress = pdfForm.getTextField("686");
  const sellerAddress = pdfForm.getTextField(
    "Sellers address for purposes of notice 1"
  );

  const cooperatingSalesAssociate = pdfForm.getTextField("695");
  const cooperatingBroker = pdfForm.getTextField("697");

  const listingSalesAssociate = pdfForm.getTextField("Listing Sales Associate");
  const listingBroker = pdfForm.getTextField("Listing Broker");
  const buyersInitialPage13 = pdfForm.getTextField("Buyers Initials");
  const buyerClosingDatePage13 = pdfForm.getTextField(
    "FloridaRealtorsFloridaBar5x_13"
  );
  const sellersInitialPage13 = pdfForm.getTextField("Sellers Initials_13");
  const sellerClosingDatePage13 = pdfForm.getTextField("undefined_14");

  additionalTerms.setText("1");
  buyerCounterOfferOrRejection1.setText("2");
  buyerCounterOfferOrRejectionDate1.setText("3");
  buyerCounterOfferOrRejection2.setText("4");
  buyerCounterOfferOrRejectionDate2.setText("5");

  sellersCounterOfferOrRejection1.setText("6");
  buyerCounterOfferOrRejectionDate3.setText("7");
  sellersCounterOfferOrRejection2.setText("8");
  buyerCounterOfferOrRejectionDate4.setText("9");
  buyersAddress.setText("10");

  sellerAddress.setText("11");
  cooperatingSalesAssociate.setText("12");
  cooperatingBroker.setText("13");
  listingSalesAssociate.setText("14");
  listingBroker.setText("15");

  buyersInitialPage13.setText("16");
  buyerClosingDatePage13.setText("17");
  sellersInitialPage13.setText("18");
  sellerClosingDatePage13.setText("19");
  /************ THIRTEEN PAGE ************/

  const modifiedPdfBytes = await pdfDoc.save();

  fs.writeFileSync(outputPdfPath, modifiedPdfBytes);
};

pdfFunc();

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${outputPdfPath}`
  );
});
