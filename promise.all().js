function fetchProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data resolved!");
    }, 3000);
  });
}

function fetchProfileImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Image resolved!");
    }, 1500);
  });
}

function fetchProfileList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Profile List resolved!");
    }, 2500);
  });
}

// promise.all()

let data = Promise.all([fetchProfile(), fetchProfileImage(), fetchProfileList()]);
console.log(data);
data.then(res => console.log(res))

// async/await to fetch concurrently using promise.all()

async function getData() {
  try {
    console.log("🚀 Starting all fetches at the same time...");
    const startTime = Date.now();
    const data = await Promise.all([fetchProfile(), fetchProfileImage(), fetchProfileList()]);
    console.log(data);
    const duration = (Date.now() - startTime) / 1000;
    console.log(`✅ All data received in ${duration} seconds!\n`);
  } catch(err) {
    console.log(err);
  }
}

getData();