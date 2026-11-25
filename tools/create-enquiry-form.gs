/**
 * Creates the "Admission Enquiry" Google Form used by the website's Contact page,
 * links it to a Google Sheet, and prints the settings to paste into src/data/site.js.
 *
 * How to use:
 *   1. Open https://script.google.com and click "New project".
 *   2. Delete the sample code, paste this whole file, and click Save.
 *   3. Click Run (function: createEnquiryForm). Approve the permissions Google asks for.
 *   4. Open "Execution log" and copy the block between the ===== lines.
 *
 * The grade choices must stay identical to the <option>s in src/pages/Contact.jsx.
 */
function createEnquiryForm() {
  var GRADES = ["LKG / UKG", "Class I – V", "Class VI – VIII", "Class IX – X", "Class XI – XII", "Hostel enquiry"];

  var form = FormApp.create("Admission Enquiry – Alagappa Matriculation Hr. Sec. School");
  form.setDescription("Enquiries submitted from the school website's Contact page.");
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage("Thank you! Our office will get in touch with you shortly.");
  // Only exists on Google Workspace accounts; on a personal Gmail account it is already off.
  try { form.setRequireLogin(false); } catch (e) {}

  var items = {
    parent:  form.addTextItem().setTitle("Parent name").setRequired(true),
    student: form.addTextItem().setTitle("Student name").setRequired(true),
    phone:   form.addTextItem().setTitle("Phone").setRequired(true),
    email:   form.addTextItem().setTitle("Email"),
    grade:   form.addListItem().setTitle("Class seeking admission").setChoiceValues(GRADES),
    message: form.addParagraphTextItem().setTitle("Message"),
  };

  // Responses also go to a Google Sheet, one row per enquiry.
  var sheet = SpreadsheetApp.create("Admission Enquiries (website)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // Build a pre-filled link to discover each question's "entry.NNNN" id.
  var resp = form.createResponse();
  var marks = {};
  Object.keys(items).forEach(function (key, i) {
    var it = items[key];
    var value = key === "grade" ? GRADES[0] : "MARK" + i;
    marks[key] = value;
    resp.withItemResponse(it.createResponse(value));
  });
  var prefilled = resp.toPrefilledUrl();

  var fields = {};
  prefilled.split("?")[1].split("&").forEach(function (pair) {
    var kv = pair.split("=");
    var val = decodeURIComponent(kv[1].replace(/\+/g, " "));
    Object.keys(marks).forEach(function (key) { if (marks[key] === val) fields[key] = kv[0]; });
  });

  var url = form.getPublishedUrl();
  var block =
    "  enquiryForm: {\n" +
    '    url: "' + url + '",\n' +
    "    fields: {\n" +
    Object.keys(items).map(function (k) { return "      " + k + ': "' + (fields[k] || "") + '",'; }).join("\n") + "\n" +
    "    },\n" +
    "  },";

  Logger.log("=====  Paste this into src/data/site.js (replace the existing enquiryForm block)  =====\n" + block + "\n=====");
  Logger.log("Form (share / view):  " + url);
  Logger.log("Form (edit):          " + form.getEditUrl());
  Logger.log("Responses sheet:      " + sheet.getUrl());
}
