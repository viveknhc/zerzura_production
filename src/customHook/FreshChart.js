var preChatTemplate = {
    // Form header color and Submit button color.
    mainbgColor: '#9C5849',
    // Form Header Text and Submit button text color.
    maintxColor: '#fff',
    // Chat Form Title
    heading: 'Chat with us',
    // Chat form Welcome Message
    textBanner: 'We can\'t wait to talk to you. But first, please take a couple of moments to tell us a bit about yourself.',
    // Submit Button Label.
    SubmitLabel: 'Start Chat',
    // Fields List - Maximum is 5
    // All the values are mandatory and the script will not work if not available.
    fields: {
      field1: {
        // Type for Name - Do not Change
        type: "name",
        // Label for Field Name, can be in any language
        label: "Name",
        // Default - Field ID for Name - Do Not Change
        fieldId: "name",
        // Required "yes" or "no"
        required: "yes",
        // Error text to be displayed
        error: "Please Enter a valid name"
      },
      field2: {
        // Type for Email - Do Not Change
        type: "email",
        // Label for Field Email, can be in any language
        label: "Email",
        // Default - Field ID for Email - Do Not Change
        fieldId: "email",
        // Required "yes" or "no"
        required: "yes",
        // Error text to be displayed
        error: "Please Enter a valid Email"
      },
      field3: {
        // Type for Phone Number - Corrected from "phone number" to "phone"
        type: "phone",
        // Label for Field Phone Number, can be in any language
        label: "Phone Number",
        // Field ID for Phone Number
        fieldId: "phone_number", // Consider using an underscore for consistency
        // Required "yes" or "no"
        required: "yes",
        // Error text to be displayed
        error: "Please Enter a valid phone number"
      }
    }
  };

  window.fcSettings = {
    token: "b9b8b605-a90b-4fce-8dfe-1643d197b7b1",
    host: "https://explorertours-team.freshchat.com",
    config: {
      cssNames: {
        // The below element is mandatory. Please add any custom class or leave the default.
        widget: 'custom_fc_frame',
        // The below element is mandatory. Please add any custom class or leave the default.
        expanded: 'custom_fc_expanded'
      }
    },
    onInit: function() {
      console.log('widget init');
      fcPreChatform.fcWidgetInit(preChatTemplate);
    }
  };