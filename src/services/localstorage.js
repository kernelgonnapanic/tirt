const generateAndStoreUniqueId = (figerprint) => {
  const id = `${figerprint}${Date.now()}`;
  localStorage.setItem('uniqueIdForBrowser', id);
  return id;
};

const isLocalStorageSupported = () => {
  const item = 'test';
  try {
    localStorage.setItem(item, item);
    localStorage.removeItem(item);
    return true;
  } catch (e) {
    return false;
  }
};

const getStoredUniqueId = () => localStorage.getItem('uniqueIdForBrowser');

const acquireIdForBrowser = (fingerprint) => {
  if (!isLocalStorageSupported()) {
    return null;
  }
  const storedId = getStoredUniqueId();
  return storedId !== null ? storedId : generateAndStoreUniqueId(fingerprint);
};

export default acquireIdForBrowser;
