const { toast } = require("sonner");

const instances = {};

function toastLimited(toastType, message, settings) {
  let id = settings.id;
  instances[id] = instances[id] ? instances[id] - 1 : settings.limit;
  if (instances[id] <= 0) return;

  if (type) toast[type](message, { ...settings });
  else toast(message, { ...settings });
}
