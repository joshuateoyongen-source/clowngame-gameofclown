// ==========================================
// FIREBASE CONNECTION — LOAD ONLY FOR CONVENTION
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyDM3YVbEP7wZRySo5KQka7uC0Jr8gYRTOo",
    authDomain: "clown-convention.firebaseapp.com",
    databaseURL: "https://clown-convention-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clown-convention",
    storageBucket: "clown-convention.firebasestorage.app",
    messagingSenderId: "657154049924",
    appId: "1:657154049924:web:74e444fa31a210edb03fd1"
};

let firebaseLoadPromise = null;

window.clownFirebase = null;
window.clownFirebaseReady = null;

function loadFirebaseScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error("Could not load Firebase."));
        document.head.appendChild(script);
    });
}

async function ensureFirebaseReady() {
    if (!navigator.onLine) {
        throw new Error("Clown Convention requires an internet connection.");
    }

    if (window.clownFirebaseReady) {
        return window.clownFirebaseReady;
    }

    if (firebaseLoadPromise) {
        return firebaseLoadPromise;
    }

    firebaseLoadPromise = (async () => {
        await loadFirebaseScript(
            "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"
        );

        await loadFirebaseScript(
            "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"
        );

        await loadFirebaseScript(
            "https://www.gstatic.com/firebasejs/10.14.1/firebase-database-compat.js"
        );

        firebase.initializeApp(firebaseConfig);

        window.clownFirebase = {
            auth: firebase.auth(),
            database: firebase.database()
        };

        window.clownFirebaseReady =
            window.clownFirebase.auth.signInAnonymously()
                .then(userCredential => userCredential.user);

        return await window.clownFirebaseReady;
    })();

    try {
        return await firebaseLoadPromise;
    } catch (error) {
        firebaseLoadPromise = null;
        window.clownFirebaseReady = null;
        window.clownFirebase = null;
        throw error;
    }
}





const fish = [
    {
        image: "images/cg1.JPG",
        species: "a Fake"
    },
    {
        image: "images/cg2.JPG",
        species: "a Fake"
    },
    {
        image: "images/cg3.JPEG",
        species: "a Fake"
    },
    {
        image: "images/cg4.JPG",
        species: "a Fake"
    },
    {
        image: "images/cg5.JPG",
        species: "a Fake"
    },
    {
        image: "images/cg6.JPEG",
        species: "a Fake"
    },
    {
        image: "images/cg7.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg8.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg9.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg10.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg11.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg12.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg13.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg14.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg15.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg16.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg17.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg18.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg19.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg20.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg21.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg22.jpeg",
        species: "a Fake"
    },
    {
        image: "images/cg23.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg24.webp",
        species: "a Fake"
    },
    {
        image: "images/cg25.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg26.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg27.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg28.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg29.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg30.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg31.jpg",
        species: "a Fake"
    },
    {
        image: "images/cg32.jpg",
        species: "a Fake"
    },
    {
        image: "images/akallopisos1.jpeg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos2.jpeg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos3.jpeg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos4.JPEG",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos5.JPG",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos6.JPG",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos7.JPG",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos8.JPG",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos9.JPG",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos10.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos11.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos12.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos13.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos14.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos15.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos16.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos17.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos18.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos19.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos20.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos21.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos22.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos23.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos24.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos25.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos26.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos27.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos28.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos29.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos30.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos31.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos32.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos33.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos34.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos35.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos36.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos37.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos38.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos39.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos40.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos41.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos42.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos43.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos44.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos45.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos46.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos47.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos48.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos49.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos50.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos51.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos52.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos53.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos54.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos55.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos56.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos57.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akallopisos58.jpg",
        species: "Akallopisos"
    },
    {
        image: "images/akindynos1.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos2.jpeg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos3.jpeg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos4.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos5.JPG",
        species: "Akindynos"
    },
    {
        image: "images/akindynos6.JPG",
        species: "Akindynos"
    },
    {
        image: "images/akindynos7.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos8.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos9.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos10.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos11.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos12.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos13.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos14.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos15.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos16.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos17.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos18.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos19.webp",
        species: "Akindynos"
    },
    {
        image: "images/akindynos20.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos21.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos22.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos23.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos24.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos25.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos26.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos27.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos28.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos29.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos30.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos31.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos32.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos33.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos34.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos35.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos36.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos37.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos38.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos39.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos40.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos41.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos42.jpg",
        species: "Akindynos"
    },
    {
        image: "images/akindynos43.jpg",
        species: "Akindynos"
    },
    {
        image: "images/allardi1.JPEG",
        species: "Allardi"
    },
    {
        image: "images/allardi2.JPEG",
        species: "Allardi"
    },
    {
        image: "images/allardi3.JPG",
        species: "Allardi"
    },
    {
        image: "images/allardi4.JPG",
        species: "Allardi"
    },
    {
        image: "images/allardi5.JPG",
        species: "Allardi"
    },
    {
        image: "images/allardi6.JPEG",
        species: "Allardi"
    },
    {
        image: "images/allardi7.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi8.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi9.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi10.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi11.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi12.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi13.webp",
        species: "Allardi"
    },
    {
        image: "images/allardi14.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi15.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi16.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi17.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi18.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi19.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi20.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi21.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi22.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi23.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi24.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi25.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi26.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi27.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi28.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi29.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi30.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi31.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi32.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi33.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi34.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi35.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi36.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi37.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi38.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi39.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi40.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi41.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi42.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi43.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi44.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi45.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi46.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi47.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi48.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi49.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi50.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi51.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi52.jpg",
        species: "Allardi"
    },
    {
        image: "images/allardi53.jpg",
        species: "Allardi"
    },
    {
        image: "images/barberi1.JPG",
        species: "Barberi"
    },
    {
        image: "images/barberi2.JPG",
        species: "Barberi"
    },
    {
        image: "images/barberi3.JPG",
        species: "Barberi"
    },
    {
        image: "images/barberi4.jpeg",
        species: "Barberi"
    },
    {
        image: "images/barberi5.JPEG",
        species: "Barberi"
    },
    {
        image: "images/barberi6.JPG",
        species: "Barberi"
    },
    {
        image: "images/barberi7.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi8.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi9.webp",
        species: "Barberi"
    },
    {
        image: "images/barberi10.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi11.webp",
        species: "Barberi"
    },
    {
        image: "images/barberi12.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi13.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi14.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi15.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi16.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi17.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi18.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi19.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi20.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi21.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi22.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi23.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi24.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi25.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi26.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi27.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi28.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi29.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi30.jpeg",
        species: "Barberi"
    },
    {
        image: "images/barberi31.png",
        species: "Barberi"
    },
    {
        image: "images/barberi32.png",
        species: "Barberi"
    },
    {
        image: "images/barberi33.png",
        species: "Barberi"
    },
    {
        image: "images/barberi34.png",
        species: "Barberi"
    },
    {
        image: "images/barberi35.png",
        species: "Barberi"
    },
    {
        image: "images/barberi36.png",
        species: "Barberi"
    },
    {
        image: "images/barberi37.png",
        species: "Barberi"
    },
    {
        image: "images/barberi38.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi39.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi40.jpg",
        species: "Barberi"
    },
    {
        image: "images/barberi41.jpg",
        species: "Barberi"
    },
    {
        image: "images/maroon1.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon2.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon3.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon4.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon5.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon6.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon7.JPEG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon8.JPG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon9.JPEG",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon10.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon11.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon12.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon13.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon14.webp",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon15.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon16.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon17.webp",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon18.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon19.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon20.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon21.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon22.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon23.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon24.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon25.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon26.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon27.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon28.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon29.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon30.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon31.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon32.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon33.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon34.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon35.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon36.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon37.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon38.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon39.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon40.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon41.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon42.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon43.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon44.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon45.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon46.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon47.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon48.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon49.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon50.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon51.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon52.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon53.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon54.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon55.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon56.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon57.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/maroon58.jpg",
        species: "Biaculeatus"
    },
    {
        image: "images/bicinctus1.JPG",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus2.JPG",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus3.JPEG",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus4.JPG",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus5.JPG",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus6.JPG",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus7.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus8.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus9.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus10.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus11.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus12.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus13.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus14.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus15.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus16.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus17.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus18.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus19.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus20.webp",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus21.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus22.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus23.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus24.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus25.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus26.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus27.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus28.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus29.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus30.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus31.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus32.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus33.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus34.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus35.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus36.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus37.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus38.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus39.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus40.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus41.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus42.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus43.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus44.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus45.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/bicinctus46.jpg",
        species: "Bicinctus"
    },
    {
        image: "images/chagosensis1.JPEG",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis2.JPEG",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis3.JPEG",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis4.JPEG",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis5.JPG",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis6.JPG",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis7.webp",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis8.webp",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis9.webp",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis10.webp",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis11.webp",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis12.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis13.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis14.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis15.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis16.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis17.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis18.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis19.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis20.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis21.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis22.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis23.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis24.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/chagosensis25.jpg",
        species: "Chagosensis"
    },
    {
        image: "images/arg1.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg2.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg3.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg4.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg5.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg6.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg7.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg8.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg9.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg10.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg11.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg12.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg13.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg14.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg15.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg16.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg17.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg18.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg19.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg20.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg21.webp",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg22.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg23.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg24.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg25.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg26.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg27.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg28.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/arg29.jpg",
        species: "Chrysargyrus"
    },
    {
        image: "images/chrysogaster1.JPG",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster2.JPG",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster3.JPG",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster4.JPEG",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster5.JPEG",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster6.JPEG",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster7.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster8.webp",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster9.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster10.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster11.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster12.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster13.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster14.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster15.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster16.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster17.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster18.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster19.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster20.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster21.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster22.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster23.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster24.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster25.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster26.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster27.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster28.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster29.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster30.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster31.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster32.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster33.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster34.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster35.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster36.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster37.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster38.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysogaster39.jpg",
        species: "Chrysogaster"
    },
    {
        image: "images/chrysopterus1.JPG",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus2.JPG",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus3.JPG",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus4.JPG",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus5.JPG",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus6.JPG",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus7.webp",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus8.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus9.webp",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus10.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus12.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus13.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus14.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus15.webp",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus16.webp",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus17.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus18.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus19.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus20.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus21.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus22.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus23.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus24.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus25.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus26.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus27.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus28.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus29.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus30.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus31.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus32.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus33.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus34.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus35.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus36.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus37.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus38.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus39.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus40.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus42.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus43.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus45.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus46.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus47.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus48.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus49.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus50.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/chrysopterus51.jpg",
        species: "Chrysopterus"
    },
    {
        image: "images/clarkii1.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii2.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii3.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii4.JPEG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii5.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii6.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii7.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii8.JPEG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii9.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii10.jpeg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii11.webp",
        species: "Clarkii"
    },
    {
        image: "images/clarkii12.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii13.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii14.webp",
        species: "Clarkii"
    },
    {
        image: "images/clarkii15.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii16.webp",
        species: "Clarkii"
    },
    {
        image: "images/clarkii17.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii18.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii19.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii20.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii21.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii22.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii23.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii25.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii26.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii27.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii29.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii30.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii31.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii32.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii33.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii34.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii35.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii36.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii37.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii38.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii39.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii40.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii41.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii42.webp",
        species: "Clarkii"
    },
    {
        image: "images/clarkii43.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii44.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii45.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii46.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii47.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii48.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii49.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii50.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii51.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii52.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii53.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii54.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii55.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii56.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii58.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii59.jpg",
        species: "Clarkii"
    },
    {
        image: "images/clarkii60.JPG",
        species: "Clarkii"
    },
    {
        image: "images/clarkii61.webp",
        species: "Clarkii"
    },
    {
        image: "images/ef1.JPG",
        species: "Ephippium"
    },
    {
        image: "images/ef2.JPG",
        species: "Ephippium"
    },
    {
        image: "images/ef3.JPG",
        species: "Ephippium"
    },
    {
        image: "images/ef4.JPEG",
        species: "Ephippium"
    },
    {
        image: "images/ef5.JPG",
        species: "Ephippium"
    },
    {
        image: "images/ef6.JPG",
        species: "Ephippium"
    },
    {
        image: "images/ef7.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef8.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef9.webp",
        species: "Ephippium"
    },
    {
        image: "images/ef10.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef11.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef12.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef13.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef14.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef15.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef16.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef17.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef18.jpeg",
        species: "Ephippium"
    },
    {
        image: "images/ef19.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef20.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef21.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef22.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef23.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef24.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef25.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef26.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef27.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef28.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef29.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef30.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef31.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef32.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef33.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef34.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef35.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef36.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef37.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef38.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef39.jpg",
        species: "Ephippium"
    },
    {
        image: "images/ef40.jpg",
        species: "Ephippium"
    },
    {
        image: "images/epi1.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi2.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi3.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi4.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi5.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi6.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi7.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi8.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi9.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi11.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi12.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi13.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi14.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi15.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi16.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi17.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi18.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi19.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi20.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/epi21.jpg",
        species: "Epigrammata"
    },
    {
        image: "images/frenatus1.JPEG",
        species: "Frenatus"
    },
    {
        image: "images/frenatus2.JPG",
        species: "Frenatus"
    },
    {
        image: "images/frenatus3.JPG",
        species: "Frenatus"
    },
    {
        image: "images/frenatus4.JPG",
        species: "Frenatus"
    },
    {
        image: "images/frenatus5.JPG",
        species: "Frenatus"
    },
    {
        image: "images/frenatus6.JPEG",
        species: "Frenatus"
    },
    {
        image: "images/frenatus7.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus8.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus9.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus10.webp",
        species: "Frenatus"
    },
    {
        image: "images/frenatus11.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus12.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus13.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus14.webp",
        species: "Frenatus"
    },
    {
        image: "images/frenatus15.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus16.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus17.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus18.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus19.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus20.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus21.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus22.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus23.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus24.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus25.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus26.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus27.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus28.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus29.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus30.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus31.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus32.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus33.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus34.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus35.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus36.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus37.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus38.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus39.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus40.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus41.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus42.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus43.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus44.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus45.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus46.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus47.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus48.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus49.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus50.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus51.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus52.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus53.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus54.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus55.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus56.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus57.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus58.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus59.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus60.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus61.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus62.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus63.jpg",
        species: "Frenatus"
    },
    {
        image: "images/frenatus64.jpg",
        species: "Frenatus"
    },
    {
        image: "images/fusco1.JPEG",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco2.JPG",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco3.JPG",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco4.JPEG",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco5.JPG",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco6.JPEG",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco7.webp",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco8.webp",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco9.webp",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco10.webp",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco11.webp",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco12.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco13.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco14.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco15.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco16.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco17.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco18.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco19.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco20.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco21.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco22.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco23.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco24.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco25.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco26.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco27.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco28.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco29.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco30.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco31.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/fusco32.jpg",
        species: "Fuscocaudatus"
    },
    {
        image: "images/japon1.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon2.jpg",
        species: "Japonicus"
    },
    {
        image: "images/japon3.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon4.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon5.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon6.jpg",
        species: "Japonicus"
    },
    {
        image: "images/japon7.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon8.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon9.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon10.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon11.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon12.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon13.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon14.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon15.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon16.webp",
        species: "Japonicus"
    },
    {
        image: "images/japon17.webp",
        species: "Japonicus"
    },
    {
        image: "images/late1.JPG",
        species: "Latezonatus"
    },
    {
        image: "images/late2.JPG",
        species: "Latezonatus"
    },
    {
        image: "images/late3.JPG",
        species: "Latezonatus"
    },
    {
        image: "images/late4.JPG",
        species: "Latezonatus"
    },
    {
        image: "images/late5.JPG",
        species: "Latezonatus"
    },
    {
        image: "images/late6.JPG",
        species: "Latezonatus"
    },
    {
        image: "images/late7.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late8.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late9.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late10.webp",
        species: "Latezonatus"
    },
    {
        image: "images/late11.webp",
        species: "Latezonatus"
    },
    {
        image: "images/late12.webp",
        species: "Latezonatus"
    },
    {
        image: "images/late13.webp",
        species: "Latezonatus"
    },
    {
        image: "images/late14.webp",
        species: "Latezonatus"
    },
    {
        image: "images/late15.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late16.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late17.webp",
        species: "Latezonatus"
    },
    {
        image: "images/late18.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late19.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late20.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late21.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late22.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late23.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late24.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late25.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late26.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late27.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late28.jpg",
        species: "Latezonatus"
    },
    {
        image: "images/late29.png",
        species: "Latezonatus"
    },
    {
        image: "images/late30.png",
        species: "Latezonatus"
    },
    {
        image: "images/late31.png",
        species: "Latezonatus"
    },
    {
        image: "images/late32.png",
        species: "Latezonatus"
    },
    {
        image: "images/late33.png",
        species: "Latezonatus"
    },
    {
        image: "images/late34.png",
        species: "Latezonatus"
    },
    {
        image: "images/late35.png",
        species: "Latezonatus"
    },
    {
        image: "images/late36.png",
        species: "Latezonatus"
    },
    {
        image: "images/lat1.JPEG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat2.JPEG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat3.JPEG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat4.JPEG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat5.JPG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat6.JPEG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat7.JPG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat8.JPG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat9.JPEG",
        species: "Latifaciatus"
    },
    {
        image: "images/lat10.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat11.webp",
        species: "Latifaciatus"
    },
    {
        image: "images/lat12.webp",
        species: "Latifaciatus"
    },
    {
        image: "images/lat13.webp",
        species: "Latifaciatus"
    },
    {
        image: "images/lat14.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat15.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat16.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat17.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat18.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat19.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat20.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat21.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat22.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat23.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat24.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat25.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat26.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat27.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat28.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat29.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat30.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat31.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat32.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat33.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat34.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat35.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat36.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat37.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat38.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat39.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat40.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat41.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat42.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat43.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat44.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat45.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/lat46.jpg",
        species: "Latifaciatus"
    },
    {
        image: "images/leucokranos1.JPG",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos2.JPG",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos3.JPG",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos4.JPG",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos5.JPG",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos6.JPG",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos7.webp",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos8.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos9.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos10.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos11.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos12.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos13.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos14.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos15.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos16.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos17.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos18.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos19.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos20.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos21.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos22.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos23.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos24.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos25.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos26.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos27.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos28.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos29.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos30.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos31.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos32.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos33.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos34.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos35.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos36.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/leucokranos37.jpg",
        species: "Leucokranos"
    },
    {
        image: "images/maohiensis1.JPG",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis2.JPG",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis3.JPG",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis4.JPG",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis5.JPEG",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis6.JPG",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis7.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis8.jpeg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis9.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis10.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis11.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis12.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis13.webp",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis14.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis15.webp",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis16.webp",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis17.webp",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis18.webp",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis19.webp",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis20.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis21.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis22.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis23.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis24.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis25.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis26.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis27.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis28.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis29.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis30.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis31.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis32.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis33.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis34.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis35.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis36.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis37.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis38.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis39.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis40.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/maohiensis41.jpg",
        species: "Maohiensis"
    },
    {
        image: "images/mccullochi1.JPG",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi2.JPG",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi3.JPG",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi4.JPEG",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi5.JPEG",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi6.JPEG",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi7.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi8.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi9.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi10.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi11.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi12.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi13.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi14.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi15.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi16.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi17.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi18.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi19.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi20.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi21.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi22.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi23.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi24.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi25.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi26.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi27.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/mccullochi28.jpg",
        species: "Mccullochi"
    },
    {
        image: "images/melan1.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan2.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan3.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan4.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan5.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan6.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan7.JPEG",
        species: "Melanopus"
    },
    {
        image: "images/melan8.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan9.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan10.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan11.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan12.JPG",
        species: "Melanopus"
    },
    {
        image: "images/melan13.webp",
        species: "Melanopus"
    },
    {
        image: "images/melan14.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan15.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan16.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan17.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan18.webp",
        species: "Melanopus"
    },
    {
        image: "images/melan19.webp",
        species: "Melanopus"
    },
    {
        image: "images/melan20.webp",
        species: "Melanopus"
    },
    {
        image: "images/melan21.webp",
        species: "Melanopus"
    },
    {
        image: "images/melan22.webp",
        species: "Melanopus"
    },
    {
        image: "images/melan23.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan24.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan25.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan26.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan27.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan28.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan29.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan30.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan31.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan32.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan33.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan34.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan35.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan36.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan37.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan38.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan39.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan40.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan41.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan42.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan43.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan44.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan45.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan46.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan47.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan48.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan49.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan50.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan51.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan52.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan53.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan54.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan55.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan56.jpg",
        species: "Melanopus"
    },
    {
        image: "images/melan57.jpg",
        species: "Melanopus"
    },
    {
        image: "images/milii1.webp",
        species: "Milii"
    },
    {
        image: "images/milii2.webp",
        species: "Milii"
    },
    {
        image: "images/milii3.webp",
        species: "Milii"
    },
    {
        image: "images/milii4.webp",
        species: "Milii"
    },
    {
        image: "images/milii5.webp",
        species: "Milii"
    },
    {
        image: "images/milii6.webp",
        species: "Milii"
    },
    {
        image: "images/milii7.webp",
        species: "Milii"
    },
    {
        image: "images/milii8.webp",
        species: "Milii"
    },
    {
        image: "images/milii9.webp",
        species: "Milii"
    },
    {
        image: "images/milii10.webp",
        species: "Milii"
    },
    {
        image: "images/milii11.webp",
        species: "Milii"
    },
    {
        image: "images/milii12.webp",
        species: "Milii"
    },
    {
        image: "images/milii13.webp",
        species: "Milii"
    },
    {
        image: "images/milii14.webp",
        species: "Milii"
    },
    {
        image: "images/milii15.jpg",
        species: "Milii"
    },
    {
        image: "images/milii16.webp",
        species: "Milii"
    },
    {
        image: "images/milii17.jpg",
        species: "Milii"
    },
    {
        image: "images/nigripes1.JPEG",
        species: "Nigripes"
    },
    {
        image: "images/nigripes2.JPEG",
        species: "Nigripes"
    },
    {
        image: "images/nigripes3.JPEG",
        species: "Nigripes"
    },
    {
        image: "images/nigripes4.JPG",
        species: "Nigripes"
    },
    {
        image: "images/nigripes5.JPG",
        species: "Nigripes"
    },
    {
        image: "images/nigripes6.JPEG",
        species: "Nigripes"
    },
    {
        image: "images/nigripes7.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes8.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes9.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes10.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes11.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes12.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes13.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes14.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes15.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes16.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes17.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes18.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes19.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes20.webp",
        species: "Nigripes"
    },
    {
        image: "images/nigripes21.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes22.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes23.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes24.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes25.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes26.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes27.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes28.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes29.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes30.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes31.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes32.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes33.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes34.jpg",
        species: "Nigripes"
    },
    {
        image: "images/nigripes35.png",
        species: "Nigripes"
    },
    {
        image: "images/nigripes36.png",
        species: "Nigripes"
    },
    {
        image: "images/nigripes37.png",
        species: "Nigripes"
    },
    {
        image: "images/nigripes38.png",
        species: "Nigripes"
    },
    {
        image: "images/nigripes39.png",
        species: "Nigripes"
    },
    {
        image: "images/nigripes40.png",
        species: "Nigripes"
    },
    {
        image: "images/nigripes41.png",
        species: "Nigripes"
    },
    {
        image: "images/ocellaris1.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris2.JPEG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris3.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris4.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris5.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris6.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris7.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris8.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris9.JPG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris10.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris11.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris12.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris16.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris17.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris18.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris19.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris20.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris21.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris22.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris23.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris24.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris25.JPEG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris26.JPEG",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris27.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris28.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris29.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris30.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris31.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris32.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris33.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris34.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris35.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris36.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris37.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris38.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris39.webp",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris40.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris41.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris42.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris43.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris44.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris45.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris46.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris47.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris48.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris49.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris50.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris51.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris52.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris53.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris54.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris55.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris56.jpeg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris57.jpeg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris58.jpeg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris59.png",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris60.png",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris61.png",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris62.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris63.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris64.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris65.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris66.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris67.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris68.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris69.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris70.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris71.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris72.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris73.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris74.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris75.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris76.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/ocellaris77.jpg",
        species: "Ocellaris"
    },
    {
        image: "images/oman1.JPG",
        species: "Omanensis"
    },
    {
        image: "images/oman2.JPG",
        species: "Omanensis"
    },
    {
        image: "images/oman3.JPG",
        species: "Omanensis"
    },
    {
        image: "images/oman4.JPG",
        species: "Omanensis"
    },
    {
        image: "images/oman5.JPG",
        species: "Omanensis"
    },
    {
        image: "images/oman6.JPG",
        species: "Omanensis"
    },
    {
        image: "images/oman7.webp",
        species: "Omanensis"
    },
    {
        image: "images/oman8.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman9.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman10.jpeg",
        species: "Omanensis"
    },
    {
        image: "images/oman11.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman12.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman13.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman14.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman15.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman16.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman17.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman18.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman19.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman20.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman21.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman22.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman23.png",
        species: "Omanensis"
    },
    {
        image: "images/oman24.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman25.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman26.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman27.jpg",
        species: "Omanensis"
    },
    {
        image: "images/oman28.jpg",
        species: "Omanensis"
    },
    {
        image: "images/pacificus1.JPEG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus2.JPEG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus3.JPEG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus4.JPG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus5.JPG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus6.JPG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus7.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus8.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus9.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus10.jpeg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus11.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus12.JPG",
        species: "Pacificus"
    },
    {
        image: "images/pacificus13.webp",
        species: "Pacificus"
    },
    {
        image: "images/pacificus14.webp",
        species: "Pacificus"
    },
    {
        image: "images/pacificus15.webp",
        species: "Pacificus"
    },
    {
        image: "images/pacificus16.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus17.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus18.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus19.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus20.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus21.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus22.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus23.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus24.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus25.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus26.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus27.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus28.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus29.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus30.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus31.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus32.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus33.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus34.webp",
        species: "Pacificus"
    },
    {
        image: "images/pacificus35.jpg",
        species: "Pacificus"
    },
    {
        image: "images/pacificus36.jpg",
        species: "Pacificus"
    },
    {
        image: "images/percula1.JPG",
        species: "Percula"
    },
    {
        image: "images/percula2.JPEG",
        species: "Percula"
    },
    {
        image: "images/percula3.JPG",
        species: "Percula"
    },
    {
        image: "images/percula4.JPG",
        species: "Percula"
    },
    {
        image: "images/percula5.JPG",
        species: "Percula"
    },
    {
        image: "images/percula6.JPG",
        species: "Percula"
    },
    {
        image: "images/percula7.webp",
        species: "Percula"
    },
    {
        image: "images/percula8.jpg",
        species: "Percula"
    },
    {
        image: "images/percula9.webp",
        species: "Percula"
    },
    {
        image: "images/percula10.jpg",
        species: "Percula"
    },
    {
        image: "images/percula11.webp",
        species: "Percula"
    },
    {
        image: "images/percula12.jpg",
        species: "Percula"
    },
    {
        image: "images/percula13.jpg",
        species: "Percula"
    },
    {
        image: "images/percula14.jpg",
        species: "Percula"
    },
    {
        image: "images/percula15.jpg",
        species: "Percula"
    },
    {
        image: "images/percula16.jpg",
        species: "Percula"
    },
    {
        image: "images/percula17.jpg",
        species: "Percula"
    },
    {
        image: "images/percula18.jpg",
        species: "Percula"
    },
    {
        image: "images/percula19.jpg",
        species: "Percula"
    },
    {
        image: "images/percula20.jpg",
        species: "Percula"
    },
    {
        image: "images/percula21.jpg",
        species: "Percula"
    },
    {
        image: "images/percula22.webp",
        species: "Percula"
    },
    {
        image: "images/percula23.webp",
        species: "Percula"
    },
    {
        image: "images/percula24.webp",
        species: "Percula"
    },
    {
        image: "images/percula25.webp",
        species: "Percula"
    },
    {
        image: "images/percula26.webp",
        species: "Percula"
    },
    {
        image: "images/percula27.webp",
        species: "Percula"
    },
    {
        image: "images/percula28.webp",
        species: "Percula"
    },
    {
        image: "images/percula29.webp",
        species: "Percula"
    },
    {
        image: "images/percula30.webp",
        species: "Percula"
    },
    {
        image: "images/percula31.webp",
        species: "Percula"
    },
    {
        image: "images/percula32.webp",
        species: "Percula"
    },
    {
        image: "images/percula33.jpg",
        species: "Percula"
    },
    {
        image: "images/percula34.jpg",
        species: "Percula"
    },
    {
        image: "images/percula35.jpg",
        species: "Percula"
    },
    {
        image: "images/percula36.jpg",
        species: "Percula"
    },
    {
        image: "images/percula37.jpg",
        species: "Percula"
    },
    {
        image: "images/percula38.jpg",
        species: "Percula"
    },
    {
        image: "images/percula39.jpg",
        species: "Percula"
    },
    {
        image: "images/percula40.jpg",
        species: "Percula"
    },
    {
        image: "images/percula41.jpg",
        species: "Percula"
    },
    {
        image: "images/percula42.jpg",
        species: "Percula"
    },
    {
        image: "images/percula43.jpg",
        species: "Percula"
    },
    {
        image: "images/percula44.jpg",
        species: "Percula"
    },
    {
        image: "images/percula45.jpg",
        species: "Percula"
    },
    {
        image: "images/percula46.jpg",
        species: "Percula"
    },
    {
        image: "images/percula47.jpg",
        species: "Percula"
    },
    {
        image: "images/percula48.jpg",
        species: "Percula"
    },
    {
        image: "images/percula49.jpg",
        species: "Percula"
    },
    {
        image: "images/percula50.jpg",
        species: "Percula"
    },
    {
        image: "images/percula51.jpg",
        species: "Percula"
    },
    {
        image: "images/percula52.jpg",
        species: "Percula"
    },
    {
        image: "images/percula53.jpg",
        species: "Percula"
    },
    {
        image: "images/percula54.jpg",
        species: "Percula"
    },
    {
        image: "images/percula55.jpg",
        species: "Percula"
    },
    {
        image: "images/percula56.jpg",
        species: "Percula"
    },
    {
        image: "images/percula57.jpg",
        species: "Percula"
    },
    {
        image: "images/percula58.jpg",
        species: "Percula"
    },
    {
        image: "images/percula59.jpg",
        species: "Percula"
    },
    {
        image: "images/percula60.jpg",
        species: "Percula"
    },
    {
        image: "images/percula61.jpg",
        species: "Percula"
    },
    {
        image: "images/percula62.jpg",
        species: "Percula"
    },
    {
        image: "images/perideraion1.JPG",
        species: "Perideraion"
    },
    {
        image: "images/perideraion2.JPG",
        species: "Perideraion"
    },
    {
        image: "images/perideraion3.JPEG",
        species: "Perideraion"
    },
    {
        image: "images/perideraion4.JPG",
        species: "Perideraion"
    },
    {
        image: "images/perideraion5.JPG",
        species: "Perideraion"
    },
    {
        image: "images/perideraion6.JPG",
        species: "Perideraion"
    },
    {
        image: "images/perideraion7.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion8.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion9.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion10.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion11.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion12.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion13.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion14.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion15.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion16.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion17.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion18.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion19.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion20.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion21.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion22.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion24.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion25.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion26.webp",
        species: "Perideraion"
    },
    {
        image: "images/perideraion27.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion28.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion29.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion30.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion31.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion32.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion33.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion34.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion35.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion36.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion37.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion38.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion39.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion40.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion41.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion42.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion43.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion44.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion45.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion46.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion47.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion48.png",
        species: "Perideraion"
    },
    {
        image: "images/perideraion49.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion50.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion51.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion52.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion53.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion54.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion55.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion56.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion57.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion58.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion59.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion60.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion61.jpg",
        species: "Perideraion"
    },
    {
        image: "images/perideraion62.jpg",
        species: "Perideraion"
    },
    {
        image: "images/polymnus1.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus2.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus3.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus4.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus5.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus6.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus7.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus8.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus9.JPG",
        species: "Polymnus"
    },
    {
        image: "images/polymnus10.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus11.webp",
        species: "Polymnus"
    },
    {
        image: "images/polymnus12.webp",
        species: "Polymnus"
    },
    {
        image: "images/polymnus13.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus14.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus15.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus16.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus17.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus18.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus19.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus20.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus21.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus22.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus23.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus24.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus25.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus26.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus27.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus28.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus29.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus30.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus31.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus32.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus33.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus34.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus35.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus36.jpeg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus37.jpeg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus38.jpeg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus39.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus40.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus41.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus42.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus43.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus44.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus45.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus46.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus47.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus48.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus49.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus50.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus51.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus52.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus53.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus54.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus55.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus56.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus57.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus58.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus59.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus60.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus61.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus62.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus63.jpg",
        species: "Polymnus"
    },
    {
        image: "images/polymnus64.jpg",
        species: "Polymnus"
    },
    {
        image: "images/rubro1.JPG",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro2.JPG",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro3.JPG",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro4.JPG",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro5.JPG",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro6.JPG",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro7.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro8.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro9.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro10.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro11.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro12.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro13.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro14.webp",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro15.webp",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro16.webp",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro17.webp",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro18.webp",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro19.webp",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro20.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro21.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro22.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro23.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro24.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro25.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro26.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro27.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro28.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro29.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro30.jpg",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro31.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro32.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro33.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro34.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro35.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro36.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro37.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro38.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro39.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro40.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro41.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/rubro42.png",
        species: "Rubrocinctus"
    },
    {
        image: "images/sandarancinos1.JPG",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos2.JPG",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos3.JPG",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos4.JPG",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos5.JPG",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos6.JPG",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos7.webp",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos8.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos9.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos10.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos11.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos12.webp",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos13.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos14.webp",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos15.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos16.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos17.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos18.webp",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos19.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos20.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos21.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos22.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos23.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos24.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos25.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos26.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos27.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos28.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos29.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos30.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos31.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos32.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos33.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos34.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos35.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos36.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos37.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos38.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos39.png",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos40.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos41.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos42.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos43.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos44.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sandarancinos45.jpg",
        species: "Sandarancinos"
    },
    {
        image: "images/sebae1.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae2.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae3.JPG",
        species: "Sebae"
    },
    {
        image: "images/sebae4.webp",
        species: "Sebae"
    },
    {
        image: "images/sebae5.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae7.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae8.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae9.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae10.webp",
        species: "Sebae"
    },
    {
        image: "images/sebae11.webp",
        species: "Sebae"
    },
    {
        image: "images/sebae12.webp",
        species: "Sebae"
    },
    {
        image: "images/sebae13.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae14.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae15.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae16.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae17.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae18.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae19.JPEG",
        species: "Sebae"
    },
    {
        image: "images/sebae20.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae21.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae22.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae23.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae24.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae25.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae26.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae27.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae28.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae29.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae30.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae31.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae32.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae33.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae34.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae35.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae36.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae37.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae38.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae39.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae40.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae41.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae42.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae43.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae44.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae45.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae46.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae47.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae48.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae49.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae50.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae51.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae52.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae53.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae54.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae55.jpg",
        species: "Sebae"
    },
    {
        image: "images/sebae56.jpg",
        species: "Sebae"
    },
    {
        image: "images/snyderi1.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi2.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi3.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi4.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi5.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi6.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi7.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi8.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi9.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi10.webp",
        species: "Snyderi"
    },
    {
        image: "images/snyderi11.jpg",
        species: "Snyderi"
    },
    {
        image: "images/snyderi12.jpg",
        species: "Snyderi"
    },
    {
        image: "images/snyderi13.jpg",
        species: "Snyderi"
    },
    {
        image: "images/snyderi14.jpg",
        species: "Snyderi"
    },
    {
        image: "images/snyderi15.jpg",
        species: "Snyderi"
    },
    {
        image: "images/thi1.JPG",
        species: "Thiellei"
    },
    {
        image: "images/thi2.JPG",
        species: "Thiellei"
    },
    {
        image: "images/thi3.JPEG",
        species: "Thiellei"
    },
    {
        image: "images/thi4.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi5.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi6.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi7.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi8.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi9.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi10.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi11.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/thi12.jpeg",
        species: "Thiellei"
    },
    {
        image: "images/tricinctus1.JPG",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus2.JPG",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus3.JPG",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus4.JPEG",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus5.JPG",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus6.JPG",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus7.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus8.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus9.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus10.webp",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus11.webp",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus12.webp",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus13.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus14.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus15.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus16.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus17.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus18.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus19.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus20.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus21.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus22.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus23.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus24.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus25.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus26.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus27.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus28.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus29.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus30.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus31.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus32.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus33.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus34.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus35.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus36.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus37.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus38.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus39.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus40.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus41.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus42.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus43.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus44.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus45.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus46.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus47.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus48.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus49.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus50.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus51.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus52.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus53.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus54.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus55.jpg",
        species: "Tricinctus"
    },
    {
        image: "images/tricinctus56.jpg",
        species: "Tricinctus"
    }
];









let shuffledFish = [];
let currentFishIndex = 0;



// ================================
// MUSIC SETTINGS
// ================================

const musicVolume = 0.35;

// true = evolving tracks
// false = one continuous looping track
const useEvolvingMusic = true; //set to false for duels music; set true for normal gameplay

// Track used when continuous music is enabled
const continuousMusic = "duelsmusic/cggocduelsmusic.mp3";

// Evolving music tracks
const musicTracks = [
    "music/music1.mp3",
    "music/music2.mp3",
    "music/music3.mp3",
    "music/music4.mp3",
    "music/music5.mp3"
];  




// ==========================================
// SHUFFLE FISH
// ==========================================

function shuffleFish() {

    // Make a copy so the original fish array stays unchanged
    const selectedSpecies = new Set(
    [...document.querySelectorAll(
        "#species-checkbox-list input[type='checkbox']:checked"
    )].map(checkbox => checkbox.value)
    );

    shuffledFish = fish.filter(f =>
    selectedSpecies.has(f.species)
    );

    // Fisher-Yates shuffle
    for (let i = shuffledFish.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffledFish[i], shuffledFish[j]] =
            [shuffledFish[j], shuffledFish[i]];
    }

    // Start at the first fish in the newly shuffled list
    currentFishIndex = 0;
}


// ==========================================
// GET ALL THE HTML ELEMENTS
// ==========================================

const fishImage =
    document.getElementById("fish-image");

const streakCount =
    document.getElementById("streak-count");

const speciesSelect =
    document.getElementById("species-select");

const submitButton =
    document.getElementById("submit-button");

const nextButton =
    document.getElementById("next-button");

const result =
    document.getElementById("result");

const scoreDisplay =
    document.getElementById("score");

const questionNumberDisplay =
    document.getElementById("question-number");


// ==========================================
// GAME VARIABLES
// ==========================================

let currentFish = null;

let score = 0;

let questionNumber = 1;

let answered = false;


let blinkMode = false;
let hazelnutMode = false;
const blinkDuration = 380;






// ==========================================
// METAS OF CLOWN — SPECIES GUIDE DATABASE, EDIT CLOWN INFORMAYTION CLWON CLOWN POOOOOOOOOOOOOOOOOP
// ==========================================
// To add a species, copy one species block,
// change its name, image and information.
// Calculate the chance of encountering this species

const clownfishGuide = {

    "Ocellaris": {
        image: "images/ocellaris6.JPG",

        scientificName: "Amphiprion ocellaris",

        description:
            "Ocellaris clowns are the most iconic clown, and are found throughout the Southern South China Sea. They are easily confused with their relatives Percula.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Ocellaris Clowns usually have 11 Dorsal Fin Spines on their first dorsal fin; Percula clowns usually have 10 instead.",
           
            "Ocellaris Clowns have less defined black lines lining their white bars compared to Percula.",
        ],

        similarSpecies:
            "Percula", 

        extraNotes:
            "Ocellaris Clowns are shy and will always be found very close to or within their Anemones."
    },

    "Percula": {
        image: "images/percula1.JPG",

        scientificName: "Amphiprion percula",

        description:
            "Percula Clowns are found around the Great Barrier Reef, and are shy, living within their anemones like their relatives Ocellaris.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Percula Clowns usually have 10 Dorsal Fin Spines on their first dorsal fin; Ocellaris clowns usually have 11 instead.",
            "Percula Clowns usually have yellow-ringed eyes, which is rare in other Clowns.",
            "Percula Clowns' three white bars will usually have black lines of variable diameters lining them."
        ],

        similarSpecies:
            "Ocellaris",

        extraNotes:
            "Perculas are less ragebaitable than Ocellarises are hehehe"
    },



    "Akindynos": {
        image: "images/akindynos4.webp",

        scientificName: "Amphiprion akindynos",

        description:
            "Akindynos Clowns, also known as the Barrier Reef Clowns, inhabit the Great Barrier Reef of Australia.",

        whitebars: "2 White Bars",

        identificationTips: [
            "Akindynos Clowns have a large and noticeable white patch on their mouths, referred to as the 'Meth Mouth'. This can be found in other species, but is usually less prominent or less common",
            "Akindynos Clowns have a bright white caudal fin, especially nearing the caudal peduncle."
        ],

        similarSpecies:
            "Omanensis",

        extraNotes:
            "Akindynos clowns do not like methamphetamine, and they instead have meth mouths to add salt to their food as a part of their diet."
    },



    "a Fake": {
        image: "images/cg6.JPEG",

        scientificName: "Coris Gaimard",

        description:
            "Fakes are not actually Amphiprion clowns, and are instead juveniles of the species Coris Gaimard, or the African or Clown Coris fish, which resemble Clowns.",

        whitebars: "5 to 6 White Circles",

        identificationTips: [
            "Fakes have circular bars, which are incomplete and do not extend all the way to the belly. This is unique to the Fake.",
            "Fakes do not have a Clown body, and are shaped like wedges, or long and slender, especially in comparison to Clowns, which are rounder and fatter."
        
        
        ],

        similarSpecies:
            "None",

        extraNotes:
            "Ohnepixel and Friends adore the Fake."
    },

    "Sebae": {
        image: "images/sebae20.jpg",

        scientificName: "Amphiprion sebae",

        description:
            "Sebae Clowns are one of the most widespread Clowns, ranging from the Arabian peninsula to the Chagos islands, and to Sumatra and Java.",

        whitebars: "2 White Bars with a Saddle",

        identificationTips: [
            "Like the other Saddlebacks, Sebae has a saddle as its second White Bar.",
            "Sebae has a yellow caudal fin, which is different from Polymnus' white and black one.",
            "Sebae is limited to Haddoni anemones, which is useful for choosing NOT to guess Sebae.",
            "Sebae has some coverage taken during different algae blooms. The water therefore appears a vivid green."
        
        
        ],

        similarSpecies:
            "Polymnus",

        extraNotes:
            "Sebae love Haddoni very much!"
    },
   
    "Akallopisos": {
        image: "images/akallopisos5.JPG",

        scientificName: "Amphiprion akallopisos",

        description:
            "The most common of the Skunk Clowns, as in those with a white horizontal bar along the dorsal fins, Akallopisos Clowns inhabit the Eastern African coast, as well as Western Sumatra.",

        whitebars: "Skunk Bar (Horizontal)",

        identificationTips: [
            "Akallopisos has a white caudal fin; within the skunks, this is also found in Pacificus.",
            "Akallopisos is generally paler compared to both Pacificus and Sandarancinos, the two other Skunk Clowns.",
            "Akallopisos can be found in both Magnifica and Mertensii Anemones, whilst Pacificus can only be found in the former.",
            "Akallopisos sometimes has copyright that has a French website domain (.fr). This is unique to Akallopisos.",
            "Akallopisos is generally more commonly found within white-coloured Anemones in its coverage compared to Pacificus."


        ],

        similarSpecies:
            "Pacificus, Sandarancinos",

        extraNotes:
            "Keoki Stenders prefer Pacificus hehehe."
    },

    "Pacificus": {
        image: "images/pacificus2.JPEG",

        scientificName: "Amphiprion pacificus",

        description:
            "As their name suggests, Pacificus Clowns are one of the three skunks, only found within the Pacific.",

        whitebars: "Skunk Bar (Horizontal)",

        identificationTips: [
            "Pacificus has a white caudal fin; within the skunks, this is also found in Akallopisos.",
            "Compared to Akallopisos, Pacificus is generally more orange, but not as orange as Sandarancinos",
            "In some of Pacificus' coverage, a Keoki Stenders trademark can be seen in large letters. This can be found in other clowns, but within the Skunks, it is only found in Pacificus.",
            "Pacificus can only be found in Magnifica anemones; Akallopisos can be found in Magnifica and Mertensii anemones."


        ],

        similarSpecies:
            "Akallopisos, Sandarancinos",

        extraNotes:
            "Keoki Stenders prefer Pacificus yay!"
    },


    "Allardi": {
        image: "images/allardi3.JPG",

        scientificName: "Amphiprion allardi",

        description:
            "Allardi Clowns, also known as the Clowns of Southern Africa, can be found from Mozambique's coast down to the Southern Cape.",

        whitebars: "2 White Bars",

        identificationTips: [
            "Allardi has a black trunk, with yellow caudal, pelvic and anal fins almost always, and a white caudal fin, forming a recognisable goblet/cup shape.",
            "Allardi has a black cap on its forehead, much like Clarkii, Barberi and Chrysogaster. Since the black cap is less noticeable within Chrysopterus, it can be useful for telling the two apart.",
            "Allardi, being the Clown of Southern Africa, has some coverage taken with copyrights listing places within the region, such as Cape Town. This is unique to Allardi."


        ],

        similarSpecies:
            "Clarkii, Chrysopterus",

        extraNotes:
            "Allardi want all hard e!"
    },

   "Biaculeatus": {
        image: "images/maroon2.JPG",

        scientificName: "Amphiprion biaculeatus",

        description:
            "Biaculeatus (Maroon) Clowns are big and fat Clowns that like to annoy other fish nearby. They are nonetheless popular in aquariums.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Maroon Clowns are much bigger than most other Clowns, and therefore they proportions are different. For instance, their eyes are smaller in relation to the rest of their body.",
            "Maroon Clowns get their name from the dark-red, maroon colour of their bodies. This tone of red is highly indicitive of Biaculeatus.",
            "Maroon Clowns will almost always have a red eye outline around their eyes, which appears in no other Clown.",
            "Maroon Clowns will sometimes have a spine on their cheek that points towards the mouth. This spine is unique to Maroon Clowns."

        ],

        similarSpecies:
            "Ocellaris, Percula",

        extraNotes:
            "Fat Fig"
    },

 "Chagosensis": {
        image: "images/chagosensis3.JPEG",

        scientificName: "Amphiprion chagosensis",

        description:
            "Chagos Clowns get their name from the Chagos archipelago that they are endemic to.",

        whitebars: "2 White Bars",

        identificationTips: [
            "Chagos Clowns will have a plain body, either light gray or light yellow, and won't have black unlike most other Clowns. Bicinctus, on the other hand, will usually have black on its body.",

        ],

        similarSpecies:
            "Bicinctus",

        extraNotes:
            "Chagos Clown Chill in Chanemone"
    },



 "Barberi": {
        image: "images/barberi1.JPG",

        scientificName: "Amphiprion barberi",

        description:
            "Barberi Clowns are one of the Clowns of the Great Pacific, and resembles some of the tomato clowns.",

        whitebars: "1 White Bar",

        identificationTips: [
            "Barberi will have a plain body, but its forehead will always have a dark gray patch on its head, nicknamed the 'black cap'. This, alongside the tomato (single) white bar is indicitive of Barberi.",


        ],

        similarSpecies:
            "Frenatus, Rubrocinctus",

        extraNotes:
            "Uzie black beanie meta funnie."
    },

 "Chrysargyrus": {
        image: "images/arg7.webp",

        scientificName: "Amphiprion chrysargyrus (Clarkii Variant)",

        description:
            "Chrysargyrus Clowns are one of the regional variants of Clarkii, and these Clowns are found from the Philippines to Taiwan, up to the Ryukyu islands and down to Borneo.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Chrysargyrus' cuadal fin is very recognisable; it is white, but has yellow lines lining the top and bottom of that fin.",
            "Chrysargyrus Clowns usually have a colour fade from their head to caudal peduncle from beige at its mouth to black nearer the rear. This colouration is similar to Tricinctus, and is much more common in Chrysargyrus than Clarkii or the other Clarkii variants."
            
        ],

        similarSpecies:
            "Clarkii, Japonicus, Tricinctus",

        extraNotes:
            "Special Tail call for CLOWN CELEBRATINO"
    },

 "Chrysogaster": {
        image: "images/chrysogaster2.JPG",

        scientificName: "Amphiprion chrysogaster",

        description:
            "Also known as the Mauritian Clowns, Chrysogaster Clowns live chill amish lifestyles within their Anemones.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Chrysogaster Clowns are mostly black in colour, from their black forehead to their caudal fin. The only part of their body that isn't black is the Clown's yellow belly.",
            "Chrysogaster Clowns have a simple-looking black and white tail, unlike Fuscocaudatus' caudal fin which has pins and spikes within it."


        ],

        similarSpecies:
            "Fuscocaudatus",

        extraNotes:
            "Chrys so chill."
    },

 "Chrysopterus": {
        image: "images/chrysopterus1.JPG",

        scientificName: "Amphiprion chrysopterus",

        description:
            "Chrysopterus Clowns are found from Papua New Guinea's eastern coast all the way to the surrounding reefs of Micronesia, Vanuatu and Tuvalu.",

        whitebars: "2 White Bars",

        identificationTips: [
            "Chrysopterus Clowns have a black coloured trunk/body, which is common in similar Clowns such as Allardi and Clarkii, but rarer in Maohiensis.",
            "Chrysopterus Clowns usually have a white caudal fin, but can sometimes have a yellow one instead.",
            "Chrysopterus Clowns' anal fin will usually be black, compared to in Allardi and Maohiensis where it is usually white."


        ],

        similarSpecies:
            "Allardi, Clarkii, Maohiensis",

        extraNotes:
            "A fren of Scuba Sam is a fren of Melan."
    },

    "Bicinctus": {
        image: "images/bicinctus1.JPG",

        scientificName: "Amphiprion bicinctus",

        description:
            "As their name suggests, Bicinctus Clowns have two white bars. They are found around the Arabian Peninsula, from the Strait of Hormuz to the Gulf of Aden. They have also been recorded within the Chagos Archipelago, with their relatives the Chagos Clowns (A. chagosensis).",

        whitebars: "2 White Bars",

        identificationTips: [
            "Bicinctus Clowns have yellow fins and a somewhat black shaded body. Sometimes, this black shading is not noticeable, and the Clown can resemble Chagosensis.",
            "Bicinctus Clowns usually have large fins relative to their body; such proportions of fins are rare in other Clowns, especially Chagosensis."


        ],

        similarSpecies:
            "Chagosensis",

        extraNotes:
            "Professional Clown Gamers abbreviate this species as 'Bih'."
    },


    "Clarkii": {
        image: "images/clarkii60.JPG",

        scientificName: "Amphiprion clarkii",

        description:
            "The most widely distributed Clown, Clarkiis can be found from Eastern Africa all the way to Australia and beyond. Therefore, Clarkii has many regional variants of itself.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Clarkii Clowns have a black patch on their forehead, known as the 'black cap'. This is associated with Clarkii, but is also common in other Clowns, such as Allardi, Chrysogaster, Fuscocaudatus, Latifaciatus and Tricinctus to name a few.",
            "Clarkii Clowns usually have a yellow to light-yellow caudal fin. A translucent. Also, a 'luminescent' yet slightly pale caudal fin is almost unique to Clarkii.",
            "Clarkii's pelvic and anal fins will usually be yellow, and its belly black (including the rest of its body being black). This is uncommon in other Clowns",
            "Clarkii is the only Clown that can pair with a Malu anemone; hence a Clown is a Clarkii if it has paired with one.",
            "",
            "To tell Clarkii apart from regional subspecies/variants, the typical Clarkii has a black trunk with yellow fins."


        ],

        similarSpecies:
            "Allardi, Chrysopterus, Latifaciatus, Maohiensis,Tricinctus",

        extraNotes:
            "Clarkii Malu"
    },

    "Ephippium": {
        image: "images/ef6.JPG",

        scientificName: "Amphiprion ephippium",

        description:
            "Ephippium Clowns are found around the reefs of South-East Asia, and are relatives of the saddlebacks (Polymnus and Sebae).",

        whitebars: "None",

        identificationTips: [
            "Ephippium Clowns usually have no white bars; they have a black coloured saddle against the rest of their red-orange body.",
            "In the case that Ephippium has one white tomato bar (a single white bar near the operculum), they will still possess the same red body with the black saddle."

        ],

        similarSpecies:
            "None",

        extraNotes:
            "Ephipp, ephipp, loves to pee with fake."
    },

    "Fuscocaudatus": {
        image: "images/fusco5.JPG",

        scientificName: "Amphiprion fuscocaudatus",

        description:
            "Fuscocaudatus Clowns are endemic to the Seychelles archipelago. Their caudal fin has a pin-like pattern, making it one of the most unique-looking Clowns.",

        whitebars: "3 White Bars",

        identificationTips: [
            "Fuscocaudatus Clowns have a unique caudal fin; it has several black spikes or pins in it.",
            "Fuscocaudatus Clowns have a similar body colouration to Chrysogaster, of a black trunk and dorsal fins against a yellow belly and pevic and anal fins.",
            "Fuscocaudatus sometimes has a copyright showcasing the character V from the show Murder Drones. This is most common in Fuscocaudatus, but can be found in other African Clowns such as Allardi and Chrysogaster.",

        ],

        similarSpecies:
            "Chrysogaster",

        extraNotes:
            "Veeeeeeeeeeeeeeee! VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!"
    },

   "Frenatus": {
        image: "images/frenatus7.jpg",

        scientificName: "Amphiprion frenatus",

        description:
            "Frenatus Clowns are one of the tomato Clowns, and is found around the South China Sea and Australia.",

        whitebars: "1 White Bar",

        identificationTips: [
            "Frenatus, like the other tomatoes, has one white bar running behind the Clown's head.",
            "Frenatus usually has black on its body, but it resembles soot instead of appearing as a clean, black colour. In Melanopus, the body is almost always very black, and in Rubrocinctus, the body is quite dark.",
            "Frenatus has some of its coverage taken with the Mech Arena character Torchlight. This is unique to Frenatus."

        ],

        similarSpecies:
            "Melanopus, Rubrocinctus",

        extraNotes:
            "If you are falling behind in Clown Game, just Ketchup!"
    },


       "Japonicus": {
        image: "images/japon13.webp",

        scientificName: "Amphiprion japonicus (Clarkii Variant)",

        description:
            "Japonicus Clowns are a variant of A. clarkii that are found around the Taiwan Sea, as far north as the Ryukyu islands.",
            
        whitebars: "2/3 White Bars",

        identificationTips: [
            "Japonicus Clowns resemble Clarkii Clowns, but they are much darker in appearance, with more of their body being black in colour.",
            "A notable amount of the Japonicus coverage was taken either during an algae bloom or at nighttime. This can be found in other clowns too, so do not solely rely on this particular meta."

        ],

        similarSpecies:
            "Chrysargyrus, Clarkii",

        extraNotes:
            "What a Nippon Clown this Clown is!"   
    },

           "Latifaciatus": {
        image: "images/lat2.JPEG",

        scientificName: "Amphiprion latifaciatus",

        description:
            "Latifaciatus Clowns are found surrounding the coast of Madagascar, and are one of the only Clowns with a forked caudal fin!.",
            
        whitebars: "2 White Bars",

        identificationTips: [
            "Latifaciatus Clowns are one of only two Clowns to have a forked caudal fin, meaning that that fin has two fork spikes. The only other is A. Omanensis.",
            "Latifaciatus Clowns' orange/yellow tint is usually slightly more vivid compared to other Clowns.",
            "Latifaciatus Clowns may have a white dash on the upperside of their caudal fin, which can also be regularly seen in Allardi, Clarkii and other Clowns.",
            "A large amount of Latifaciatus' coverage was taken with bad quality video cameras, hence the image quality in-game is much poorer than usual. This is highly indicitive of this species.",
            "Some of Latifaciatus' coverage was taken in fish tanks with purple lights, hence the coverage appears with a purple hue. This has been known to also occur in Fuscocaudatus and Percula.",


        ],

        similarSpecies:
            "Allardi, Clarkii, Japonicus, Sebae",

        extraNotes:
            "Better to be Lat than to be Late..."   
    },

           "Latezonatus": {
        image: "images/late3.JPG",

        scientificName: "Amphiprion latezonatus",

        description:
            "Latezonatus Clowns are found along the subtropical Eastern Australian coast, from southern Queensland to northern New South Wales, and as far east as Norfolk island and Lord Howe island.",
            
        whitebars: "3 White Bars",

        identificationTips: [
            "Latezonatus Clowns are the only Clowns that are black and white with three white bands (excluding the Ocellaris Darwin Variant).",
            "Latezonatus Clowns have a noticeably wide second white bar. This is not found in any other Clown.",
            "The anemones of Latezonatus Clowns will usually be faint green to gray in colour.",
            "Latezonatus Clowns have a blue lining on their lips as well as the lining of their white bars.",

        ],

        similarSpecies:
            "None",

        extraNotes:
            "Worse to be Late than to be Lat..."   
    },


           "Maohiensis": {
        image: "images/maohiensis3.JPG",

        scientificName: "Amphiprion maohiensis",

        description:
            "Once thought to be a regional variant of A. chrysopterus, Maohiensis was officially declared a species in 2024! It is found around the polynesian region, further east than its relative Chrysopterus. Within Clown Game, consistently telling apart Chrysopterus and Maohiensis is one of the hardest things to do such that even professional players mix the two up sometimes.",
            
        whitebars: "2 White Bars",

        identificationTips: [
            "Although many Clowns within the Pacific region have blue-tinged white bars, Maohiensis usually has a more noticable blue tinge to these bars, especially more so than Chrysopterus.",
            "Every fin of Maohiensis is ALWAYS yellow. In chrysopterus, they may be black, yellow or white.",
            "Maohiensis' dorsal fin is generally not as tall as Chrysopterus or other Clowns.",
            
    
        ],

        similarSpecies:
            "Chrysopterus",

        extraNotes:
            "Never forget the Maohiensis incident..."   
    },


           "Melanopus": {
        image: "images/melan7.JPEG",

        scientificName: "Amphiprion melanopus",

        description:
            "Melanopus Clowns are one of the tomato Clowns, and are found from the Great Barrier Reef eastwards to Guam, New Guinea, Vanuatu and even Samoa!",            
        whitebars: "1 White Bar (tomato)",

        identificationTips: [
            "Melanopus' dorsal, caudal and sometimes its anal fin will be a bright and vibrant yellow in contrast to the rest of its black or orange body. This vibrant yellow to the rear does not ever occur within other tomato Clowns.",
    
    
        ],

        similarSpecies:
            "Frenatus, Rubrocinctus",

        extraNotes:
            "2nd in line to the Keoki Stender's private Clown Yacht Club."   
    },

           "Milii": {
        image: "images/milii5.webp",

        scientificName: "Amphiprion milii (Clarkii Variant)",

        description:
            "Milii Clowns are a Clarkii Variant found along Austrlia's northern coast.",            
        whitebars: "3 White Bars",

        identificationTips: [
            "Milii Clowns are usually amost fully black except for a bright yellow caudal fin, closely resembling Sebae Clowns. However, Sebae will have a saddle bar (second white bar), whilst for Milii, it will look just like its other two bars.",
            "Milii Clowns may appear very similar to Clarkii, but will be have more black colouration than Clarkii."
    
        ],

        similarSpecies:
            "Clarkii, Sebae",

        extraNotes:
            "Clark E. adores the Milii!"  
            
            
    },

           "Leucokranos": {
        image: "images/leucokranos8.jpg",

        scientificName: "Amphiprion leucokranos",

        description:
            "Also known as 'white-bonnet Clowns', Leucokranos Clowns are found around South-East Asia.",

        whitebars: "1 White Bar (Leucokranos)",

        identificationTips: [
            "Leucokranos Clowns have a unique white bar, which is made up of a chinstrap running down to the belly, and near the dorsal fin there is a dash, or what is commonly referred to as the 'crown' or 'bonnet'. Thiellei also has this special white bar.",
            
        ],

        similarSpecies:
            "Thiellei",

        extraNotes:
            "Nobody jokes around like the Circus Crown."  
            
            
    },

           "Mccullochi": {
        image: "images/mccullochi3.JPG",

        scientificName: "Amphiprion mccullochi",

        description:
            "Mccullochi Clowns are one of two Clowns found around Lord Howe island. In this case, Mccullochi Clowns are endemic to this region.",

        whitebars: "Usually 1 White Bar",

        identificationTips: [
            "Mccullochi Clowns will almost always have exactly one white bar, and the upper tip of this white bar will curve towards the Clown's body instead of continuing up to the dorsal fins.",
            "Mccullochi Clowns ALWAYS have a white chalky patch on their mouths, much like Akindynos Clowns, and also a white caudal fin."
            
        ],

        similarSpecies:
            "None",

        extraNotes:
            "Hurry up and make or lock in you guess!"  
            
    },

           "Nigripes": {
        image: "images/nigripes4.JPG",

        scientificName: "Amphiprion nigripes",

        description:
            "Nigripes Clowns are found around the Maldives, and are endemic to that archipelago.",

        whitebars: "1 White Bar",

        identificationTips: [
            "Nigripes Clowns ALWAYS have a black belly contrasted to an orange body, and vivid-yellow pectoral, dorsal and caudal fins.",
            "Nigripes is only found within Magnifica anemones, which are characterised by a usually pink or purple column with long tentacles."
            
        ],

        similarSpecies:
            "None",

        extraNotes:
            "Everybody loves Nigripes Clowns!"  
            
    },

           "Omanensis": {
        image: "images/oman2.JPG",

        scientificName: "Amphiprion omanensis",

        description:
            "As their name suggests, Omanensis Clowns are endemic Oman's coast. They are one of two Clowns to have a forked caudal fin, the other being Latifaciatus.",

        whitebars: "1 White Bar",

        identificationTips: [
            "Omanensis Clowns have forked caudal fins. The only other Clown with a forked caudal fin is Latifaciatus.",
            "Omanensis has a very dark brown, maroon and sometimes black body, which is rare in other Clowns.",
            "Compared to other Clowns and especially to Akindynos, Omanensis has close to no chalky white patch around its mouth.",
        ],

        similarSpecies:
            "Akindynos",

        extraNotes:
            "'Oh man, I guessed Akindynos again!'"  
            
    },

           "Perideraion": {
        image: "images/perideraion1.JPG",

        scientificName: "Amphiprion perideraion",

        description:
            "Perideraion Clowns are found from Northern Australia to South-East Asia, and as far east as Melanesia.",

        whitebars: "1 White Bar and a Skunk Bar (Horizontal)",

        identificationTips: [
            "Perideraion Clowns have a special combination of white bars; one horizontal running from its dorsal fins down to its belly like a chinstrap, and additionally a skunk bar running along its dorsal fins. This is unique to Perideraion.",
            "Perideraion can sometimes appear very reddish-pink. This colour of Clown is found nowhere else."
        ],

        similarSpecies:
            "None",

        extraNotes:
            "Perideraion Clowns are commonly known as Pink Skunk Clowns, even though they are not Pink, and they are not true skunks. A genuine identity crisis!"  
            
    },


           "Polymnus": {
        image: "images/polymnus1.JPG",

        scientificName: "Amphiprion polymnus",

        description:
            "Also known as the Saddleback Clown, these are one of the most famous Clowns, found all around South-East Asia, north to the Ryukyu islands, south to Australia and as far east as Melanesia.",

        whitebars: "3 White Bars (saddle)",

        identificationTips: [
            "The caudal fin of Polymnus is black, with a translucent white lining around it, forming a unique-looking fin. Sebae's is yellow instead.",
            "Polymnus has a 2nd white bar that resembles a saddle, curving upwards and away from the Clown's head. This is also found in Sebae.",
            "Polymnus males and females differ greatly in colouration; the females are almost entirely black apart from their white bars, and are much bigger compared to the males, who still have black colouration but are much more orange.",
            "Polymnus Clowns are usually seen with their carpet anemones on the seabed, surrounded by sand.",
            "Some of Polymnus' coverage was taken alongside the British Broadcasting Channel's wildlife team, hence a BBC copyright can be seen. This is unique to Polymnus."
        ],

        similarSpecies:
            "Sebae",

        extraNotes:
            "Watch this BBC video on Saddleback Clowns here: https://www.youtube.com/watch?v=rn6R4ncd2OU"  
            
    },

           "Rubrocinctus": {
        image: "images/rubro6.JPG",

        scientificName: "Amphiprion rubrocinctus",

        description:
            "Also known as the Australian Clown, Rubrocinctus Clowns are one of the tomatoes, and are found along the northern coast of Western Australia and the Northern Territory.",

        whitebars: "1 White Bar (tomato)",

        identificationTips: [
           "Rubrocinctus Clowns generally have more black colouration than the other teo tomatoes, Frenatus and Melanopus.",
           "In some of Rubrocinctus' coverage, a red pixel glitch can be seen somewhere on the screen. This has been recorded in other Clowns, but not yet within the other two tomatoes."

        ],

        similarSpecies:
            "Frenatus, Melanopus",

        extraNotes:
            "Rubrocinctus Clowns have been abbreviated as 'Rubro'."  
            
    },

           "Sandarancinos": {
        image: "images/sandarancinos4.JPG",

        scientificName: "Amphiprion sandarancinos",

        description:
            "Sandarancinos Clowns are one of the Skunk Clowns, found from Japan down to Western Australia, and from Sumatra to Papua New Guinea.",

        whitebars: "1 Skunk Bar (horizontal)",

        identificationTips: [
           "Compared to the other Skunk Clowns, Sandarancinos is the only one of them that has an orange caudal fin. Similarly, the body of Sandarancinos is noticeably more orange than the other Skunk Clowns.",
           "During the coverage capturing process, the Sandarancinos Clowns faced the cameras head-on, hence a large amount of the head-first coverage among the Clowns will belong to Sandarancinos."

        ],

        similarSpecies:
            "Akallopisos, Pacificus",

        extraNotes:
            "Keoki Sanders"  
            
    },

           "Snyderi": {
        image: "images/snyderi14.jpg",

        scientificName: "Amphiprion snyderi (Clarkii Variant)",

        description:
            "Snyderi Clowns are one of the Clarkii Variants, and are found around the bays of Japan, such as near Osaka and Hiroshima.",

        whitebars: "3 White Bars",

        identificationTips: [
           "Compared to Clarkii and the other Clarkii Variants, Snyderi Clowns are almost completely black and white in appearance.",
           "Snyderi's coverage will almost always appear as light-blue to dark-blue due to the conditions within Japanese waters at the time the coverage was taken. This is highly indicitive of Snyderi."

        ],

        similarSpecies:
            "Clarkii, Japonicus",

        extraNotes:
            "Snyderi is often abbreviated to 'Sny'."  
            
    },

          "Thiellei": {
        image: "images/thi1.JPG",

        scientificName: "Amphiprion thiellei (Hybrid)",

        description:
            "Thiellei Clowns are a naturally occuring hybrid between A. ocellaris and A. sandarancinos, or between A. ocellaris and A. leucokranos. They are found around Cebu island.",

        whitebars: "1 White Bar (Leucokranos)",

        identificationTips: [
           "Alongside its white 'Leucokranos' bar, Thiellei Clowns also have a short dash at their caudal peduncle, and sometimes another white dash in between the two dorsal fins.",
           "Because of the rarity of this species, the majority of the Thiellei coverage was taken within the Fish Farm 3 simulator, hence the Thiellei Clowns will appear as renders within a digital tank. This kind of coverage can also occasionally be found in other Clowns, but Leucokranos lacks this coverage."

        ],

        similarSpecies:
            "Leucokranos",

        extraNotes:
            "Thiellei is the rarest Clown within Clown Game."  
            
    },

          "Tricinctus": {
        image: "images/tricinctus4.JPEG",

        scientificName: "Amphiprion tricinctus",

        description:
            "Tricinctus Clowns get their name from the fact that they, like many other Clowns, have three white bars. They inhabit the eastern Pacific reefs.",

        whitebars: "3 White Bars",

        identificationTips: [
           "Similar to Akindynos, Tricinctus CLowns have a clear 'Meth Mouth' on their mouths that can help distinguish them from Clarkii, who will usually not have one as distinct.",
           "Tricinctus Clowns usually have a recognisable 'fading' colouration, from beige at their mouths, gradually becoming darker towards the rear. This is also common in other Clowns such as Clarkii and Chrysargyrus.",
           "Tricinctus Clowns sometimes appear fully black except for their three white bars, resembling an Ocellaris Darwin Variant but with thinner white bars, or resembling a Milli but with a black caudal fin instead.",
           "Tricinctus Clowns ALWAYS have a black caudal fin"

        ],

        similarSpecies:
            "Clarkii, Chrysargyrus",

        extraNotes:
            "Tricinctus and Bicinctus are NOT closely related other than being in the same genus."  
            
    },



};



// ==========================================
// CREATE THE SPECIES DROPDOWN
// ==========================================

// Get every unique species from the fish database.

const species = [...new Set(
    fish.map(f => f.species)
)];

// Sort species alphabetically

species.sort((a, b) => a.localeCompare(b));

species.forEach(speciesName => {

    const option =
        document.createElement("option");

    option.value = speciesName;

    option.textContent = speciesName;

    speciesSelect.appendChild(option);

});


// ==========================================
// LOAD RANDOM FISH
// ==========================================

function loadRandomFish() {

    answered = false;

    speciesSelect.disabled = false;

    submitButton.disabled = false;  

    result.textContent = "";

    result.className = "result";

    speciesSelect.value = "";

    submitButton.style.display = "block";

    nextButton.style.display = "none";


    // If we've gone through every fish,
    // shuffle them all again

    if (currentFishIndex >= shuffledFish.length) {
    

        shuffleFish();

    }


    // Get the next fish from the shuffled list

    currentFish =
        shuffledFish[currentFishIndex];


    // Move to the next position

    currentFishIndex++;


    // Fade out the previous image while the next one loads.
fishImage.style.display = "block";
fishImage.style.visibility = "visible";
fishImage.style.opacity = "0";


    // Preload the image

    const newImage = new Image();


   newImage.onload = function() {
    // Clown Hazelnut simulates a low-quality camera by reducing the image
    // to a tiny resolution before displaying it enlarged.
    if (hazelnutMode) {
        const lowResCanvas = document.createElement("canvas");
        const lowResWidth = 48;
        const sourceWidth = newImage.naturalWidth || 1;
        const sourceHeight = newImage.naturalHeight || 1;
        lowResCanvas.width = lowResWidth;
        lowResCanvas.height = Math.max(
            1,
            Math.round(lowResWidth * sourceHeight / sourceWidth)
        );

        const lowResContext = lowResCanvas.getContext("2d");
        lowResContext.imageSmoothingEnabled = true;
        lowResContext.drawImage(
            newImage,
            0,
            0,
            lowResCanvas.width,
            lowResCanvas.height
        );

        fishImage.src = lowResCanvas.toDataURL("image/jpeg", 0.35);
        fishImage.style.imageRendering = "pixelated";
    } else {
        fishImage.src = currentFish.image;
        fishImage.style.imageRendering = "auto";
    }

    fishImage.alt = "Clown to identify";
    fishImage.style.display = "block";
    // Fade in the newly loaded image.
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        fishImage.style.opacity = "1";
    });
});

    fishImage.style.transform =
        `scaleX(${Math.random() < 0.47 ? -1 : 1}) scaleY(${upsideDownMode ? -1 : 1})`;

    const imageFilters = [];
    if (reverseColoursMode) imageFilters.push("invert(1)");
    if (hazelnutMode) imageFilters.push("blur(1.3px)");
    fishImage.style.filter = imageFilters.length ? imageFilters.join(" ") : "none";

    // ==========================================
    // BLINK MODE
    // ==========================================
    if (blinkMode) {
        fishImage.style.visibility = "visible";
        setTimeout(function() {
            if (blinkMode) fishImage.style.visibility = "hidden";
        }, blinkDuration);
    } else {
        fishImage.style.visibility = "visible";
    }
};


    newImage.onerror = function() {

        console.error(
            "Could not load image:",
            currentFish.image
        );

        result.textContent =
            "Error loading image: " +
            currentFish.image;

        result.className =
            "result incorrect";

    };


    newImage.src =
        currentFish.image;


    questionNumberDisplay.textContent =
        questionNumber;
}


// ==========================================
// CHECK THE ANSWER
// ==========================================


function checkAnswer() {
    // Ignore repeated guesses after answering
    if (answered) return;

    const selectedAnswer = speciesSelect.value;

    // Check BEFORE disabling anything
    if (selectedAnswer === "") {
        result.textContent = "Please select clown!";
        result.className = "result";
        speciesSelect.disabled = false;
        submitButton.disabled = false;
        return;
    }

    // A valid guess has been submitted
    answered = true;
    speciesSelect.disabled = true;
    submitButton.disabled = true;

    if (selectedAnswer === currentFish.species) {
        score++;
        scoreDisplay.textContent = score;

        streak++;
        streakCount.textContent = streak;

        result.textContent = "Correct!";
        result.className = "result correct";
    } else {
    // Break streak
    streak = 0;
    streakCount.textContent = streak;

    result.textContent =
        "Incorrect! It was " + currentFish.species + ".";
    result.className = "result incorrect";

    flashRedScreen();
}

    submitButton.style.display = "none";
    nextButton.style.display = "block";
}






function flashRedScreen() {
    const overlay = document.getElementById("red-flash-overlay");

    // Restart the animation if it was already running
    overlay.classList.remove("flash-active");
    void overlay.offsetWidth;
    overlay.classList.add("flash-active");
}




// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    questionNumber++;

    loadRandomFish();

}


// ==========================================
// BUTTON EVENTS
// ==========================================

submitButton.addEventListener(
    "click",
    checkAnswer
);

nextButton.addEventListener(
    "click",
    nextQuestion
);





// ================================
// Break SOUND EFFECTS
// ================================

const ambientSounds = [
    "breakfx/cggocbreak1.mp3",
    "breakfx/cggocbreak2.mp3"
];

const ambientVolume = 0.035;

// Random interval between 2 and 4 minutes
const ambientMinDelay = 180000; // 3 minutes normally at 180,000
const ambientMaxDelay = 360000; // 6 minutes normally at 360,000


function playRandomAmbientSound() {

    // Choose one of the two sound effects randomly
    const randomSound =
        ambientSounds[Math.floor(Math.random() * ambientSounds.length)];

    // Create a new audio object
    const ambientAudio = new Audio(randomSound);

    // Set volume to 0.02
    ambientAudio.volume = ambientVolume;

    // Play the sound
    ambientAudio.play().catch(() => {
        // Ignore autoplay errors
    });

    // Choose a random delay between 2 and 4 minutes
    const nextDelay =
        Math.random() * (ambientMaxDelay - ambientMinDelay)
        + ambientMinDelay;

    // Schedule the next ambient sound
    setTimeout(playRandomAmbientSound, nextDelay);
}


// Start the first ambient sound after a random
// 2–4 minute delay
const firstAmbientDelay =
    Math.random() * (ambientMaxDelay - ambientMinDelay)
    + ambientMinDelay;

setTimeout(playRandomAmbientSound, firstAmbientDelay);





// ==========================================
// BACKGROUND MUSIC
// ==========================================


let currentTrack = 0;

const audio1 =
    document.getElementById("background-music-1");

const audio2 =
    document.getElementById("background-music-2");

let activeAudio = audio1;

let nextAudio = audio2;

let musicStarted = false;

let transitionStarted = false;

let partyDuelsMusicFaded = false;


// ==========================================
// PRELOAD ALL MUSIC
// ==========================================

const preloadedMusic =
    musicTracks.map(src => {

        const audio = new Audio();

        audio.src = src;
        audio.preload = "auto";

        return audio;

    });


// ==========================================
// START MUSIC
// ==========================================

function startMusic() {
    if (musicStarted) return;

    musicStarted = true;

    // ==========================================
    // CONTINUOUS MUSIC MODE
    // ==========================================
    if (!useEvolvingMusic) {

        activeAudio.src = continuousMusic; //activeAudio.src = "duelsmusic/cggocduelsmusic.mp3";
        activeAudio.loop = true;
        activeAudio.volume = musicVolume;

        activeAudio.play().catch(() => {});

        return;
    }


    // ==========================================
    // EVOLVING MUSIC MODE
    // ==========================================

    currentTrack = 0;

    activeAudio.src = musicTracks[currentTrack];
    activeAudio.loop = false;
    activeAudio.volume = musicVolume;

    activeAudio.play().catch(() => {});
}


// ==========================================
// PLAY NEXT TRACK
// ==========================================

function playNextTrack() {

    // Don't transition when continuous music is being used
    if (!useEvolvingMusic) return;

    // Don't go beyond Track 5
    if (currentTrack >= musicTracks.length - 1) return;

    // Don't start another transition while one is already happening
    if (transitionStarted) return;

    // Mark transition as started
    transitionStarted = true;

    // Advance exactly one track at a time.
    currentTrack = Math.min(currentTrack + 1, musicTracks.length - 1);


    console.log(
        "Moving to track:",
        currentTrack + 1
    );


    // ==========================================
    // PREPARE NEXT AUDIO ELEMENT
    // ==========================================

   
    nextAudio.pause();

    nextAudio.src =
        musicTracks[currentTrack];

    nextAudio.currentTime = 0;

    nextAudio.volume = 0;

    nextAudio.loop = false;

    nextAudio.load();


    // ==========================================
    // WAIT UNTIL THE NEXT TRACK IS READY
    // ==========================================

       nextAudio.addEventListener(
        "canplay",
        startCrossfade,
        { once: true }
    );
}


// ==========================================
// CROSSFADE
// ==========================================

function startCrossfade() {
    const fadeTime = .5;
    const nextTrackDelay = 0.15;

    nextAudio.play();

    // Keep next track silent at first
    nextAudio.volume = 0.4;

    // Start fading in the new track after a delay
    setTimeout(() => {
        const steps = 30;
        const stepTime = (fadeTime * 1000) / steps;
        let step = 0;

        const fadeInterval = setInterval(() => {
            step++;

            activeAudio.volume = musicVolume * (1 - step / steps);
            nextAudio.volume = musicVolume * (step / steps);

            if (step >= steps) {
                clearInterval(fadeInterval);

                activeAudio.pause();
                activeAudio.currentTime = 0;

                [activeAudio, nextAudio] = [nextAudio, activeAudio];

                transitionStarted = false;
            }
        }, stepTime);
    }, nextTrackDelay * 1000); 
}



// ==========================================
// CHECK WHEN TO BEGIN CROSSFADE
// ==========================================

// Check both audio elements for the
// end of the currently playing track
audio1.addEventListener(
    "timeupdate",
    checkForTransition
);

audio2.addEventListener(
    "timeupdate",
    checkForTransition
);



function checkForTransition() {
    if (!useEvolvingMusic) return;
    if (!musicStarted) return;
    if (currentTrack >= musicTracks.length - 1) return;
    if (transitionStarted) return;
    if (!activeAudio.duration) return;

    const remainingTime =
        activeAudio.duration -
        activeAudio.currentTime;

    if (remainingTime <= 0.5) {
        playNextTrack();
    }
}





// ==========================================
// START MUSIC AFTER PLAYER INTERACTS
// ==========================================
document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);

// ==========================================
// LOOP TRACK 5
// ==========================================

audio1.addEventListener("ended", function () {

    if (!useEvolvingMusic) return;

    if (currentTrack === musicTracks.length - 1) {
        audio1.currentTime = 0;
        audio1.play().catch(() => {});
    }
});

audio2.addEventListener("ended", function () {

    if (!useEvolvingMusic) return;

    if (currentTrack === musicTracks.length - 1) {
        audio2.currentTime = 0;
        audio2.play().catch(() => {});
    }
});








// ==========================================
// DRIFTING BACKGROUND FISH
// ==========================================

const backgroundFishContainer =
    document.getElementById("background-fish-container");


function createBackgroundFish() {

    // The visual effect waits harmlessly if the fish database has not been added.
    if (!Array.isArray(fish) || fish.length === 0) return;

    // Pick a random fish
    const randomFish =
        fish[Math.floor(Math.random() * fish.length)];

    const image =
        document.createElement("img");

    image.src = randomFish.image;

    image.className =
        "background-fish";


    // ==========================================
    // SIZE
    // ==========================================

    const size =
        Math.random() * 210 + 140;

    image.style.width =
        size + "px";


    // ==========================================
    // POSITION
    // ==========================================

   // ==========================================
// POSITION
// ==========================================

// Start below the bottom of the screen

image.style.top = "100vh";


// Randomly choose the left or right side

const side =
    Math.random() < 0.5
        ? "left"
        : "right";


if (side === "left") {

    image.style.left =
        Math.random() * 25 + "%";

} else {

    image.style.left =
        75 + Math.random() * 25 + "%";

}


    // ==========================================
    // SPEED
    // ==========================================

    const minSize = 100;
const maxSize = 500; // CHANGE THIS to your actual maximum size

const speedRatio = Math.min(
    1,
    Math.max(0, (size - minSize) / (maxSize - minSize))
);

const fastestDuration = 50;
const slowestDuration = 90;

const duration =
    slowestDuration -
    speedRatio * (slowestDuration - fastestDuration);

    // ==========================================
    // SIDEWAYS DRIFT
    // ==========================================

    const drift =
        (Math.random() - 0.5) * 250;


    // ==========================================
    // ADD TO PAGE FIRST
    // ==========================================

    backgroundFishContainer.appendChild(image);


    // ==========================================
    // ANIMATE
    // ==========================================

    const animation =
    image.animate(
        [
            {
                transform:
                    "translate(0, 0)",

                opacity: 0.40
            },

            {
                transform:
                    `translate(${drift}px, -120vh)`,

                opacity: 0.40
            }
        ],
        {
            duration:
                duration * 1000,

            easing:
                "linear",

            fill: "forwards"
        }
    );


// Make sure the animation actually starts

animation.play();


    // ==========================================
    // DELETE AFTER LEAVING SCREEN
    // ==========================================

    animation.onfinish = function() {

        image.remove();

    };
}


// ==========================================
// SPAWN FISH
// ==========================================

setInterval(
    createBackgroundFish,
    9000
);


// ==========================================
// INITIAL FISH
// ==========================================

for (let i = 0; i < 1; i++) {

    setTimeout(
        createBackgroundFish,
        i * 1500
    );

}


// ================================
// SPACEBAR CONTROLS
// ================================

document.addEventListener("keydown", function(event) {

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        return;
    }

    if (event.code === "Space") {
        if (document.getElementById("point-party-screen") && !document.getElementById("point-party-screen").hidden) return;
        event.preventDefault();
        if (duelActive) return;
        if (!answered) checkAnswer();
        else loadRandomFish();
    }
});



// ==========================================
// TOGGLE BLINK MODE WITH Q
// ==========================================

document.addEventListener("keydown", function(event) {

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        return;
    }

    if (event.key.toLowerCase() === "q") {

        blinkMode = !blinkMode;

        console.log(
            "Blink mode:",
            blinkMode ? "ON" : "OFF"
        );

        // If switching back to normal mode,
        // immediately show the current fish
        if (!blinkMode && currentFish) {
            fishImage.style.visibility = "visible";
        }
    }

});






// ================================
// STEERING WHEEL CONTROLS (for our G29)
// ================================

let wheelLastIndex = 0;
let wheelMoveTimer = null;

function updateWheelControls() {
    const gamepads = navigator.getGamepads();
    const wheel = gamepads.find(gp => gp);

    if (!wheel) {
        requestAnimationFrame(updateWheelControls);
        return;
    }

    // G29 steering axis
    const steering = wheel.axes[0];
    const activeWheelSelect = (window.duelActive && window.duelSpeciesSelect) ? window.duelSpeciesSelect : speciesSelect;

    // More sensitive the further you turn
    const deadzone = 0.03;

    if (Math.abs(steering) > deadzone) {

        // Prevent changing every frame
        if (!wheelMoveTimer) {

            // Farther turn = faster selection
            const delay =
                180 - Math.abs(steering) * 140;

            if (steering < 0) {
                activeWheelSelect.selectedIndex =
                    Math.max(
                        0,
                        activeWheelSelect.selectedIndex - 1
                    );
            } else {
                activeWheelSelect.selectedIndex =
                    Math.min(
                        activeWheelSelect.options.length - 1,
                        activeWheelSelect.selectedIndex + 1
                    );
            }

            wheelMoveTimer = setTimeout(() => {
                wheelMoveTimer = null;
            }, delay);
        }

    } else {
        wheelMoveTimer = null;
    }

    // ================================
    // FACE BUTTONS
    // ================================

    const square = wheel.buttons[1]?.pressed;
    const circle = wheel.buttons[2]?.pressed;
    const triangle = wheel.buttons[3]?.pressed;

    // Store previous states
    if (!window.g29Buttons) {
        window.g29Buttons = {
            square: false,
            circle: false,
            triangle: false
        };
    }

    // Square = one species up
    if (square && !window.g29Buttons.square) {
        activeWheelSelect.selectedIndex =
            Math.max(
                0,
                activeWheelSelect.selectedIndex - 1
            );
    }

    // Circle = one species down
    if (circle && !window.g29Buttons.circle) {
        activeWheelSelect.selectedIndex =
            Math.min(
                activeWheelSelect.options.length - 1,
                activeWheelSelect.selectedIndex + 1
            );
    }

    // Triangle = Guess / Next
    if (triangle && !window.g29Buttons.triangle) {
        if (window.duelActive && window.submitDuelGuess) {
            window.submitDuelGuess();
        } else if (!answered) {
            checkAnswer();
        } else {
            loadRandomFish();
        }
    }


    window.addEventListener("gamepadconnected", (event) => {
        console.log("G29 connected:", event.gamepad);

        setInterval(() => {
            const gp = navigator.getGamepads()[event.gamepad.index];
            if (!gp) return;

            console.log(
                "Buttons:",
                gp.buttons.map((b, i) => `${i}:${b.pressed}`)
            );

            console.log(
                "Axes:",
                gp.axes.map((a, i) => `${i}:${a.toFixed(2)}`)
            );
        }, 500);
    });


    window.g29Buttons.square = square;
    window.g29Buttons.circle = circle;
    window.g29Buttons.triangle = triangle;

    requestAnimationFrame(updateWheelControls);
}

updateWheelControls();







// ==========================================
// START THE GAME
// ==========================================

// HOME SCREEN AND CHALLENGE SETTINGS

const homeScreen = document.getElementById("home-screen");
const challengeScreen = document.getElementById("challenge-screen");
const guideScreen = document.getElementById("guide-screen");
const gameScreen = document.getElementById("game-screen");

let upsideDownMode = false;
let reverseColoursMode = false;

document.getElementById("play-button").onclick = () => {
    // Challenge modifiers start unchecked whenever this screen is opened.
    ["blink-checkbox", "upside-checkbox", "reverse-checkbox", "corrupt-checkbox", "hazelnut-checkbox"]
        .forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) checkbox.checked = false;
        });

    blinkMode = false;
    upsideDownMode = false;
    reverseColoursMode = false;
    corruptClownEnabled = false;
    hazelnutMode = false;
    removeCorruptTiles();

    homeScreen.hidden = true;
    challengeScreen.hidden = false;
    guideScreen.hidden = true;
    gameScreen.hidden = true;
};

document.querySelectorAll(".back-button").forEach(button => {
    button.onclick = () => {
        challengeScreen.hidden = true;
        guideScreen.hidden = true;
        gameScreen.hidden = true;
        homeScreen.hidden = false;
    };
});





document.getElementById("return-home-button").onclick = () => {
    gameScreen.hidden = true;
    challengeScreen.hidden = true;
    guideScreen.hidden = true;
    homeScreen.hidden = false;
};




// START GAME BUTTON
document.getElementById("start-game-button").onclick = function () {
    
    const overlay = document.getElementById("red-flash-overlay");
    overlay.classList.remove("flash-active");
    overlay.style.opacity = "0";
    
    if (!Array.isArray(fish) || fish.length === 0) {
        alert("The fish image database is missing. Add it at the marked FISH DATABASE PLACEHOLDER near the top of script.js.");
        return;
    }

    const selectedCount = document.querySelectorAll(
        "#species-checkbox-list input[type='checkbox']:checked"
    ).length;

    if (selectedCount === 0) {
        alert("Select at least one clownfish species");
        return;
    }



    // Apply challenge settings
    blinkMode = document.getElementById("blink-checkbox").checked;
    upsideDownMode = document.getElementById("upside-checkbox").checked;
    reverseColoursMode = document.getElementById("reverse-checkbox").checked;
    hazelnutMode = document.getElementById("hazelnut-checkbox").checked;

    // Prepare the selected fish
    shuffleFish();

    if (shuffledFish.length === 0) {
        alert("No Clowns are available for the selected species");
        return;
    }


    // Reset game
    score = 0;
    questionNumber = 1;
    streak = 0;

    document.getElementById("score").textContent = "0";
    document.getElementById("question-number").textContent = "1";
    document.getElementById("streak-count").textContent = "0";

    // Switch screens
    homeScreen.hidden = true;
    challengeScreen.hidden = true;
    guideScreen.hidden = true;
    gameScreen.hidden = false;

    updateSpeciesDropdown();
    loadRandomFish();
};













// SPECIES GUIDE

const guideSelect = document.getElementById("guide-species-select");
const guideContent = document.getElementById("guide-content");

// Populate the guide dropdown with all species in the fish database.
// Species without a written guide entry remain selectable and show the
// existing message explaining that guide information has not been added yet.
function populateGuideSpeciesDropdown() {
    if (!guideSelect || !Array.isArray(fish)) return;

    const names = [...new Set(fish.map(item => item.species))]
        .sort((a, b) => a.localeCompare(b));

    guideSelect.replaceChildren();
    names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        guideSelect.appendChild(option);
    });

    // Open on a species that already has guide content when possible.
    const firstGuideSpecies = Object.keys(clownfishGuide)
        .sort((a, b) => a.localeCompare(b))
        .find(name => names.includes(name));
    if (firstGuideSpecies) guideSelect.value = firstGuideSpecies;
}

populateGuideSpeciesDropdown();

function updateSpeciesDropdown() {
    const dropdown = document.getElementById("species-select");

    // Remember the current selection, if it is still allowed
    const previousSelection = dropdown.value;

    // Get only the species selected on the challenge screen
    const selectedSpecies = [
        ...document.querySelectorAll(
            "#species-checkbox-list input[type='checkbox']:checked"
        )
    ].map(checkbox => checkbox.value);

    // Clear the old options
    dropdown.replaceChildren();

    // Add the placeholder
    //const placeholder = document.createElement("option");
    //placeholder.value = "";
    //placeholder.textContent = "Select a clownfish species";
    //placeholder.disabled = true;
    //placeholder.selected = true;
    //dropdown.appendChild(placeholder);

    // Add only the selected species, alphabetically
    selectedSpecies.sort((a, b) => a.localeCompare(b));

    selectedSpecies.forEach(species => {
        const option = document.createElement("option");
        option.value = species;
        option.textContent = species;
        dropdown.appendChild(option);
    });

    // Preserve the previous selection if it is still available
    if (selectedSpecies.includes(previousSelection)) {
        dropdown.value = previousSelection;
    }
}






function showGuideSpecies() {
    const name = guideSelect.value;
    const guide = clownfishGuide[name];

    guideContent.replaceChildren();

    if (!guide) {
        guideContent.textContent =
            "Guide information for this species has not been added yet.";
        return;
    }

    // Species name
    const heading = document.createElement("h2");
    heading.textContent = name;
    guideContent.appendChild(heading);

    // Scientific name
    const scientific = document.createElement("p");
    scientific.innerHTML = "<em></em>";
    scientific.firstElementChild.textContent =
        guide.scientificName || "";
    guideContent.appendChild(scientific);

    // Main photograph
    const img = document.createElement("img");
    img.src = guide.image;
    img.alt = name;
    img.onerror = () => {
        img.alt = "Image not found: " + guide.image;
        console.error("Guide image not found:", guide.image);
    };
    guideContent.appendChild(img);

    // Description
    addGuideSection("About this species", guide.description);

    // Identification tips
    const tipsHeading = document.createElement("h3");
    tipsHeading.textContent = "Identification tips";
    guideContent.appendChild(tipsHeading);

    const list = document.createElement("ul");

    (guide.identificationTips || []).forEach(tip => {
        const item = document.createElement("li");
        item.textContent = tip;
        list.appendChild(item);
    });

    guideContent.appendChild(list);

    // Similar species
    addGuideSection("Similar species", guide.similarSpecies);

    // Additional notes
    addGuideSection("Extra notes", guide.extraNotes);
}

// Helper function: creates a heading and paragraph
function addGuideSection(title, text) {
    if (!text) return;

    const heading = document.createElement("h3");
    heading.textContent = title;
    guideContent.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    guideContent.appendChild(paragraph);
}



guideSelect.addEventListener("change", showGuideSpecies);

document.getElementById("guide-button").onclick = () => {
    homeScreen.hidden = true;
    guideScreen.hidden = false;
    showGuideSpecies();
};







// BUILD THE ALPHABETICAL SPECIES CHECKLIST

    function buildSpeciesCheckboxes() {
        const list = document.getElementById("species-checkbox-list");
        list.replaceChildren();

        const speciesNames = [...new Set(
            fish.map(f => f.species)
        )].sort((a, b) => a.localeCompare(b));

        speciesNames.forEach(species => {
            const label = document.createElement("label");
            label.className = "species-option";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = species;
            checkbox.checked = true; // All selected by default

            const name = document.createElement("span");
            name.textContent = species;

            label.append(checkbox, name);
            list.appendChild(label);
        });
    }

    // SELECT ALL SPECIES
    document.getElementById("select-all-species").addEventListener(
        "click", () => {
            document.querySelectorAll(
                "#species-checkbox-list input[type='checkbox']"
            ).forEach(checkbox => {
                checkbox.checked = true;
            });
        }
    );

    // DESELECT ALL SPECIES
    document.getElementById("deselect-all-species").addEventListener(
        "click", () => {
            document.querySelectorAll(
                "#species-checkbox-list input[type='checkbox']"
            ).forEach(checkbox => {
                checkbox.checked = false;
            });
        }
    );


document.getElementById("select-all-species").addEventListener(
    "click", updateSpeciesDropdown
);

document.getElementById("deselect-all-species").addEventListener(
    "click", updateSpeciesDropdown
);



//---------------------------------------
//RIGHT CLICK
document.getElementById("game-screen").addEventListener(
    "contextmenu",
    function (event) {
        // Prevent the browser's normal right-click menu
        event.preventDefault();

        // Ignore right-clicks when the game isn't visible
        if (gameScreen.hidden) return;

        if (!answered) {
            // First right-click: submit the guess
            checkAnswer();
        } else {
            // Second right-click: move to the next fish
            nextQuestion();
        }
    }
);







// Prepare the game without starting a round yet.
buildSpeciesCheckboxes();
shuffleFish();


// ============================================================================
// NEW FEATURES: CORRUPT CLOWN + CLUNY COURT DUELS
// This add-on deliberately reuses the existing fish array and normal-game code.
// ============================================================================

const corruptClownCheckbox = document.getElementById("corrupt-checkbox");
const corruptTileLayer = document.getElementById("corrupt-tile-layer");
let corruptClownEnabled = false;

function removeCorruptTiles() {
    const layer = document.getElementById("corrupt-tile-layer");
    if (layer) layer.remove();
    const img = document.getElementById("fish-image");
    if (img) img.style.opacity = "1";
}

function applyCorruptTiles() {
    const img = document.getElementById("fish-image");
    const container = img && img.closest(".image-container");
    if (!img || !container || !img.src || !corruptClownEnabled || !img.complete || !img.naturalWidth) {
        removeCorruptTiles();
        return;
    }
    removeCorruptTiles();
    const layer = document.createElement("div");
    layer.id = "corrupt-tile-layer";
    layer.setAttribute("aria-label", "Corrupt Clown: shuffled image tiles");
    const order = [0,1,2,3,4,5,6,7,8];
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    const transform = img.style.transform || "none";
    const filter = img.style.filter || "none";
    layer.style.transform = transform;
    layer.style.filter = filter;
    order.forEach((sourceIndex) => {
        const tile = document.createElement("div");
        tile.className = "corrupt-tile";
        const sourceRow = Math.floor(sourceIndex / 3);
        const sourceCol = sourceIndex % 3;
        tile.style.backgroundImage = `url("${img.src}")`;
        tile.style.backgroundSize = "300% 300%";
        tile.style.backgroundPosition = `${sourceCol * 50}% ${sourceRow * 50}%`;
        layer.appendChild(tile);
    });
    container.appendChild(layer);
    img.style.opacity = "0";
}

if (corruptClownCheckbox) {
    corruptClownCheckbox.addEventListener("change", () => {
        corruptClownEnabled = corruptClownCheckbox.checked;
        if (corruptClownEnabled) applyCorruptTiles();
        else removeCorruptTiles();
    });
}

// Re-apply once the regular game's image has loaded. This wrapper keeps the
// original loadRandomFish implementation and all its existing modifiers intact.
const originalLoadRandomFishForCorrupt = loadRandomFish;
loadRandomFish = function () {
    removeCorruptTiles();
    originalLoadRandomFishForCorrupt();
};
const corruptObservedImage = document.getElementById("fish-image");
new MutationObserver(() => {
    const layer = document.getElementById("corrupt-tile-layer");
    if (layer) layer.style.visibility = corruptObservedImage.style.visibility;
}).observe(corruptObservedImage, { attributes:true, attributeFilter:["style"] });
corruptObservedImage.addEventListener("load", () => {
    if (corruptClownEnabled) applyCorruptTiles();
});

// ------------------------------- Cluny Court UI -----------------------------
const clunyLobby = document.getElementById("cluny-lobby");
const duelScreen = document.getElementById("duel-screen");
const clunyBotGrid = document.getElementById("cluny-bot-grid");
const clunyBotInfo = document.getElementById("cluny-bot-info");
const duelModeButtons = [...document.querySelectorAll("[data-duel-mode]")];

// ==========================================
// CLUNY COURT OPTIONAL CHALLENGES
// ==========================================

const clunyChallenges = {
    upside: false,
    morpho: false,
    warp: false,
    hazelnut: false
};

const clunyChallengePenalties = {
    upside: 4,
    morpho: 11,
    warp: 8,
    hazelnut: 17
};

// Connect the checkboxes to the challenge settings.
const clunyChallengeCheckboxes = {
    upside: document.getElementById("cluny-upside-checkbox"),
    morpho: document.getElementById("cluny-morpho-checkbox"),
    warp: document.getElementById("cluny-warp-checkbox"),
    hazelnut: document.getElementById("cluny-hazelnut-checkbox")
};

Object.entries(clunyChallengeCheckboxes).forEach(([challenge, checkbox]) => {
    checkbox.addEventListener("change", () => {
        clunyChallenges[challenge] = checkbox.checked;
    });
});

// Calculate the total accuracy deduction.
function getClunyChallengePenalty() {
    return Object.keys(clunyChallenges)
        .filter(challenge => clunyChallenges[challenge])
        .reduce((total, challenge) => {
            return total + clunyChallengePenalties[challenge];
        }, 0);
}
const duelImage = document.getElementById("duel-fish-image");
const duelSpeciesSelect = document.getElementById("duel-species-select");
window.duelSpeciesSelect = duelSpeciesSelect;
const duelSubmitButton = document.getElementById("duel-submit-button");
const duelRoundMessage = document.getElementById("duel-round-message");
const duelCountdown = document.getElementById("duel-countdown");
const duelTimer = document.getElementById("duel-timer");
const duelReveal = document.getElementById("duel-reveal");
const duelPlayerHealth = document.getElementById("duel-player-health");
const duelBotHealth = document.getElementById("duel-bot-health");
const duelPlayerHealthText = document.getElementById("duel-player-health-text");
const duelBotHealthText = document.getElementById("duel-bot-health-text");
const duelPlayerHearts = document.getElementById("duel-player-hearts");
const duelBotHearts = document.getElementById("duel-bot-hearts");
const duelOpponentName = document.getElementById("duel-opponent-name");
const duelOpponentImage = document.getElementById("duel-opponent-image");
const duelBotSpeechBubble = document.getElementById("duel-bot-speech-bubble");
let duelBotSpeechTimer = null;
let duelBotSpeechSwapTimer = null;
const duelExitButton = document.getElementById("duel-exit-button");
const clunyCourtButton = document.getElementById("cluny-court-button");

const clunyBots = [
    {name:"Coco the Crab", image:"bot-images/coco.png", accuracy:67, speed:"slower", description:"Coco is a good friend of Le Clown, and enjoys playing Clown Game with them.", trivia:"Coco celebrates every correct guess, even if it was a lucky one."},
    {name:"Ruffles", image:"bot-images/Ruffledrinking.png", accuracy:80, speed:"normal", description:"A mech enthusiast who wants to win his matches fair and square.", trivia:"Ruffles loves drinking coffee."},
    {name:"Grandma Rosie", image:"bot-images/rosie.png", accuracy:65, speed:"slower", description:"Grandma just wants to have fun! That doesn't mean she won't call upon the Lord to help her win!", trivia:"Grandma Rosie says the white bars say it all about a Clown."},
    {name:"Archangel", image:"bot-images/archa.png", accuracy:82, speed:"faster", description:"Archangel knows a thing or two about Clowns, and despite his size, he can overwhelm some of his opponents!.", trivia:"Archangel loves hanging with his Whale Shark friends, not so much Clowns."},
    {name:"David Attenborough", image:"bot-images/thegoat.png", accuracy:90, speed:"normal", description:"Sir David Attenborough is one of the world's most loved Ecologist. Beating him would be like beating evolution!", trivia:"He can swiftly find little details that easily separate similar species."},
    {name:"Max Verstappen", image:"bot-images/maxv.png", accuracy:73, speed:"faster", minGuessTime: 0.45, maxGuessTime: 1.5, description:"Max believes that the quicker his guess, the quicker his victory.", trivia:"Max wants every game to be a pole position."},
    {name:"ViperAte", image:"bot-images/viperate.png", accuracy:94, speed:"slower", description:"ViperAte goes by the name Joshua. He prefers to take his time with guesses, and make his best educated guess.", trivia:"ViperAte specialises in Skunk Clowns."},
    {name:"Le Clown", image:"bot-images/leclown.png", accuracy:95, speed:"normal", description:"Le Clown is one of the best players in the Clown world, and has taken home the Clown Game Title in 2026! This doesn't mean he won't guess a Fake on Latezonatus from time to time.", trivia:"Le Clown treats every round like a grand final."},
    {name:"Auntie Anna", image:"bot-images/anna.png", accuracy:60, speed:"normal", description:"A sturgeon who enjoys the occasional Clown Game.", trivia:"She is surprisingly good at Ocellaris and Percula."},
    {
        name: "Aviva",
        image:"bot-images/aviva.png",
        accuracy: 71,
        speed: "normal",
        description: "The inventor of the Wild Kratts team. Aviva has all the Clowns down on paper; whether she asks for the help of the Kratt Brothers is a different matter.",
        trivia: "Aviva relies on consistency rather than speed."
    },
    {
        name: "Clark E.",
        image:"bot-images/coolacanth.png",
        accuracy: 88,
        speed: "faster", minGuessTime: 0.45, maxGuessTime: 1.5,
        description: "Clark E. is an experienced player in Clown Game, and will not hesitate to put you in your place within the Cluny Court.",
        trivia: "Clark E. likes to put the pressure on by guessing quickly! Don't panic when he does this.",
        speciesAccuracy: {
            milli: 20,
            chrysopterus: 20,
            maohiensis: 20,
            sebae: 44,
            rubro: 44,
            akallopisos: 96,
            ef: 96,
            oman: 96,
            fusco: 96,
            percula: 75,
            chrysogaster: 75
        },
    },
    {
        name: "KJ Daddy",
        image:"bot-images/gay1gay2.png",
        accuracy: 12,
        speed: "faster", minGuessTime: 0.45, maxGuessTime: 1.5,
        description: "Daddy knows just about nothing when it comes to Clowns, so if you can somehow lose to him, you should retire.",
        trivia: "He just wants to get his games over with."
    },
    {
        name: "Ohnepixel",
        image:"bot-images/ohnepixel-1552739637.png",
        accuracy: 40,
        speed: "slower",
        description: "A German Counter-Strike player who plays many different games! He is very bad at most of them.",
        trivia: "Ohnepixel does NOT like being doxxed.",

        sharedCorrectVoiceLines: [
        "duelsmusic/OhneYay1.mp3",
        "duelsmusic/OhneYay2.mp3",
        "duelsmusic/Ohnewin.mp3",
        "duelsmusic/OhneYay5.mp3"
    ],
    sharedCorrectVoiceChance: 0.40,

    // Plays when Ohnepixel is correct but the player is wrong.
    botCorrectPlayerWrongVoiceLines: [
        "duelsmusic/OhneSmurf.mp3",
        "duelsmusic/OhneYay3.mp3",
        "duelsmusic/OhneWin2.mp3",
        "duelsmusic/OhneWin3.mp3",
        "duelsmusic/OhneYay4.mp3"
    ],
    botCorrectPlayerWrongVoiceChance: 1.00,

    wrongVoiceLines: [
        "duelsmusic/OhneVAS1.mp3",
        "duelsmusic/OhneVAS2.mp3",
        "duelsmusic/OhneVAS3.mp3",
        "duelsmusic/OhneVAS4.mp3",
        "duelsmusic/OhneVAS6.mp3",
        "duelsmusic/OhneNein1.mp3",
        "duelsmusic/OhneYoWhy.mp3",
        "duelsmusic/OhneCrashout.mp3",
        "duelsmusic/OhneCrashout2.mp3",
        "duelsmusic/OhneCry.mp3",
        "duelsmusic/OhneCry2.mp3",
        "duelsmusic/OhneCry2.5.mp3"
    ],
    wrongVoiceChance: 0.92
    },
    {
        name: "Anemone",
        image:"bot-images/tf2.png",
        accuracy: 86,
        speed: "faster",
        description: "Known for their gameplay in Titanfall Too, Anemone is also very experienced in Clown Game.",
        trivia: "Anemone, or Anemone Enjoyer, is pronouned Ah-nay-mon.",
                speciesAccuracy: {
            sebae: 99,
            akallopisos: 99,
            nigripes: 99
        },
    },
    {
        name: "J",
        image:"bot-images/Jmd.png",
        accuracy: 67,
        speed: "variable",
        minGuessTime: 3,
        maxGuessTime: 11,
        accuracyIncreaseOnWrong: 4,
        maxAccuracy: 98,
        description: "As a Drone, J learns from her incorrect guesses and guesses better and better the longer the match.",
        trivia: "Take her down before she improves too much."
    },
{
    name: "Harry Vanderspeigle",
    image:"bot-images/vander.png",
    accuracy: 80,
    speed: "slower",
    description: "Harry usually prioritizes destroying the Earth, but it looks like he has time for a Game of Clown.",
    trivia: "He loves the colon."
},
{
    name: "Kash",
    image:"bot-images/kash.png",
    accuracy: 56,
    speed: "normal",
    description: "Kash is the newest member of the Last Kids on Earth, and has a hatred for the Nublar Six kids. He'll channel that hatred into Clown Game, so stay strong against him!",
    trivia: "Kash has a gigantic crush on Beast Boy."
},
{
    name: "Feces",
    image:"bot-images/Feces.png",
    accuracy: 48,
    speed: "faster",
    description: "A little cutie cup of Joy!.",
    trivia: "Feces loves Cheese."
},

];


// EDIT CLUNYBOT SPEECH HERE. Add your own strings to a category's array.
// Categories: start, winning, losing, bothCorrect, bothWrong,
// botCorrectPlayerWrong, playerCorrectBotWrong, botWins, botLoses.
// Ohnepixel is intentionally excluded; he uses audio voice lines instead.
const clunyBotSpeechCategories = [
    "start", "winning", "losing", "bothCorrect", "bothWrong",
    "botCorrectPlayerWrong", "playerCorrectBotWrong", "botWins", "botLoses"
];
// Default lines ensure every bot (except Ohnepixel, who uses audio) can speak
// immediately. Add or replace lines for individual bots below.
const defaultClunyBotSpeechLines = {
    start: ["Let's see what you've got!", "Ready? Let's identify some Clowns!"],
    winning: ["I'm pulling ahead!", "This round is going my way."],
    losing: ["I need to make a comeback!", "You're ahead, but I'm not done yet."],
    bothCorrect: ["Nice, we both got it!", "Good eye!"],
    bothWrong: ["That one got both of us.", "What!? That was a tricky one!"],
    botCorrectPlayerWrong: ["Got it! Better luck next round.", "I spotted that one!"],
    playerCorrectBotWrong: ["Nice guess. You got me there.", "Well played!"],
    botWins: ["That's my match!", "Victory!"],
    botLoses: ["You win this time. Well played!", "I was close!"]
};
const clunyBotSpeechLines = Object.fromEntries(
    clunyBots
        .filter(bot => bot.name !== "Ohnepixel")
        .map(bot => [bot.name, Object.fromEntries(
            clunyBotSpeechCategories.map(category => [category, [...defaultClunyBotSpeechLines[category]]])
        )])
);
//Coco
clunyBotSpeechLines["Coco the Crab"].start.push(
    "Clown Game time!",
    "Crabby Match",
    "How about you crab at THESE apples!"
);
clunyBotSpeechLines["Coco the Crab"].winning.push(
    "Haha you're quite bad",
    "Crab winning",
    "Lock in!",
    "Looks like I'll crab this victory"
);
clunyBotSpeechLines["Coco the Crab"].losing.push(
    "You're not bad",
    "You're playing well for somebody who's not a Clown",
    "Okay let me lock in!"
);
clunyBotSpeechLines["Coco the Crab"].botCorrectPlayerWrong.push(
    "Got it right!",
    "That was an easy one!",
    "You are not good",
    "Even an Urchin could've gotten THAT right...",
    "Bad Guess",
    "Feeling Crabby?"
);
clunyBotSpeechLines["Coco the Crab"].botWins.push(
    "I'm Keeling it today!",
    "Better luck next time!",
    "I've seen Urchins play better"
);
clunyBotSpeechLines["Coco the Crab"].botLoses.push(
    "Good game!",
    "I'm shell shocked!",
    "Okay, okay. Go fight Clown now. He's a pro.",
    "You should consider signing up for the Clown Championships!",
    "Not bad, not bad." 
);


//Ruffle
clunyBotSpeechLines["Ruffles"].start.push(
    "All right guys!",
    "Welcome to the Cluny Arena!",
    "Alright time for some non-meta Clown gameplay!",
    "I'm going for Oracles; not sure about you.",
    "Okay let's deal with this guy quick."
);
clunyBotSpeechLines["Ruffles"].winning.push(
    "Okay nice shots so far",
    "Good we're leading",
    "We are in the lead!",
    "Nice nice guys."
);
clunyBotSpeechLines["Ruffles"].losing.push(
    "We are losing the lead!",
    "Come on man can you please not use Outlaw",
    "What a hacker!",
    "I'm gonna steal all of your A-Coins after this.",
    "We're not playing well today are we."
);
clunyBotSpeechLines["Ruffles"].botCorrectPlayerWrong.push(
    "Smooth Operator!",
    "Nice damage!",
    "Next round we'll go to C",
    "I guess I have time for another Crate",
    "Oh no...",
    "Bro lock in!"
);
clunyBotSpeechLines["Ruffles"].botWins.push(
    "Okay nice!",
    "Oh wow 16 Kills!",
    "Okay see you next time!"
);
clunyBotSpeechLines["Ruffles"].botLoses.push(
    "GG!",
    "Please don't use gay mechs man",
    "I GOT 9 ASSISTS ARE YOU KIDDING ME!!!",
    "Let's go back to Mech Arena",
    "Darn it I lost my A-Coins" 
);

//Grandma
clunyBotSpeechLines["Grandma Rosie"].start.push(
    "Trust in the Lord!",
    "Hello!",
    "The Lord is our saviour!",
    "Good Luck!",
    "The Lord is my Shepard, and I shall not!"
);
clunyBotSpeechLines["Grandma Rosie"].winning.push(
    "If you're unsure about a Clown, just commit your worries to the Lord!",
    "Come on!",
    "Pa, I'm winning!"
);
clunyBotSpeechLines["Grandma Rosie"].losing.push(
    "The Lord wants what is best for all of us!",
    "We are the pearls of great price!",
    "Ah Pai Ni ah!",
    "Nice work so far!",
    "You are playing quite well ah! Very good!"
);
clunyBotSpeechLines["Grandma Rosie"].botCorrectPlayerWrong.push(
    "Sorry!",
    "Luck guess lah!",
    "Wah! I got it right!",
);
clunyBotSpeechLines["Grandma Rosie"].botWins.push(
    "Because of the Lord, I have won this game!",
    "Better luck next time dear!",
    "The Lord is good!"
);
clunyBotSpeechLines["Grandma Rosie"].botLoses.push(
    "The Lord wanted you to win!",
    "Well done!",
    "Wah I'm so proud of you lah!",
    "Very good!",
    "Even though you won, never forget; pride always comes before a fall!" 
);





// CUSTOMISE SPEECH PER BOT HERE. For example:
// clunyBotSpeechLines["Coco the Crab"].start.push("Let's do this!");
// clunyBotSpeechLines["Coco the Crab"].botCorrectPlayerWrong.push("I got that one!");

let selectedClunyBot = null;
let duelMode = "classic";
let duelActive = false;
window.duelActive = false;
window.submitDuelGuess = null;
let duelRoundActive = false;
let duelPlayerAnswered = false;
let duelBotAnswered = false;
let duelPlayerCorrect = false;
let duelBotCorrect = false;
let duelCurrentFish = null;
let duelStartTime = 0;
let duelBotTime = 0;
let duelPlayerTime = null;
let duelTimerInterval = null;
let duelTimeout = null;
let duelBotTimeout = null;
let duelRoundDeadline = null;
let duelRoundNumber = 0;
let duelPlayerHP = 5;
let duelBotHP = 5;
let duelPlayerMaxHP = 5;
let duelBotMaxHP = 5;
let duelPlayerMultiplierStacks = 0;
let duelBotMultiplierStacks = 0;
let duelAudio = null;
let partyDuelsAudio = null;
let partyDuelsMusicActive = false;
let duelPreviousMusicTrack = 0;


// ==========================================
// CLUNY COURT BELL SOUND EFFECT
// ==========================================

let lastDuelBellTime = 0;

function playDuelBell() {
    const now = performance.now();

    // Prevent two nearly simultaneous events from playing
    // the bell twice.
    if (now - lastDuelBellTime < 400) return;

    lastDuelBellTime = now;

    const bell = new Audio("duelsmusic/bell-ring.mp3");

    bell.volume = 0.12;

    bell.play().catch(error => {
        console.warn("Could not play duel bell:", error);
    });
}


// ==========================================
// CLUNY COURT COUNTDOWN SOUND EFFECT
// ==========================================

function playDuelCountdownSound() {
    const sound = new Audio("duelsmusic/Countdowngoc.m4a");
    sound.volume = 0.25;

    sound.play().catch(error => {
        console.warn("Could not play duel countdown sound:", error);
    });
}


function playDuelHealthLossSound() {
    const sound = new Audio("duelsmusic/losehealth.mp3");
    sound.volume = 0.28;

    sound.play().catch(error => {
        console.warn("Could not play health-loss sound:", error);
    });
}



function populateDuelSpecies() {
    if (!duelSpeciesSelect || typeof fish === "undefined") return;
    duelSpeciesSelect.replaceChildren();
    const names = [...new Set(fish.map(f => f.species))].sort((a,b)=>a.localeCompare(b));
    names.forEach(name => { const o=document.createElement("option"); o.value=name; o.textContent=name; duelSpeciesSelect.appendChild(o); });
}

function renderClunyBots() {
    if (!clunyBotGrid) return;
    clunyBotGrid.replaceChildren();
    clunyBots.forEach((bot, index) => {
        const card = document.createElement("article");
        card.className = "cluny-bot-card";

        // Portraits are configured in the clunyBots array in script.js.
        // The portrait slot stays above the name button even if no image is set yet.
        const portrait = document.createElement("div");
        portrait.className = "cluny-bot-portrait";
        if (bot.image) {
            const image = document.createElement("img");
            image.className = "cluny-bot-image";
            image.alt = `${bot.name} portrait`;
            image.src = bot.image;
            image.onerror = () => {
                image.remove();
                portrait.textContent = "Add portrait path in script.js";
                portrait.classList.add("portrait-missing");
            };
            portrait.appendChild(image);
        } else {
            portrait.textContent = "Add portrait path in script.js";
            portrait.classList.add("portrait-missing");
        }

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = bot.name;
        button.addEventListener("click", () => selectClunyBot(index));
        card.append(portrait, button);
        clunyBotGrid.appendChild(card);
    });
}

//For Ohne
function playClunyBotVoiceLine(bot, wasCorrect) {
    if (!bot) return;

    const voiceLines = wasCorrect
        ? bot.correctVoiceLines
        : bot.wrongVoiceLines;

    const chance = wasCorrect
        ? bot.correctVoiceChance
        : bot.wrongVoiceChance;

    if (!voiceLines || voiceLines.length === 0) return;
    if (Math.random() >= chance) return;

    const selectedVoiceLine =
        voiceLines[Math.floor(Math.random() * voiceLines.length)];

    const voice = new Audio(selectedVoiceLine);
    voice.volume = 0.28;

    voice.play().catch(error => {
        console.warn("Could not play Cluny bot voice line:", error);
    });
}
function playOhnepixelVoiceLine(playerCorrect, botCorrect) {
    if (!selectedClunyBot || selectedClunyBot.name !== "Ohnepixel") return;

    let voiceLines = [];
    let chance = 0;

    if (botCorrect && playerCorrect) {
        // Both players got it right.
        voiceLines = selectedClunyBot.sharedCorrectVoiceLines || [];
        chance = selectedClunyBot.sharedCorrectVoiceChance ?? 0;
    } else if (botCorrect && !playerCorrect) {
        // Ohnepixel got it right, but the player got it wrong.
        voiceLines = selectedClunyBot.botCorrectPlayerWrongVoiceLines || [];
        chance = selectedClunyBot.botCorrectPlayerWrongVoiceChance ?? 0;
    } else if (!botCorrect) {
        // Ohnepixel got it wrong, whether or not the player was correct.
        voiceLines = selectedClunyBot.wrongVoiceLines || [];
        chance = selectedClunyBot.wrongVoiceChance ?? 0;
    }

    if (!voiceLines.length || Math.random() >= chance) return;
    const filename = voiceLines[Math.floor(Math.random() * voiceLines.length)];
    const voice = new Audio(filename);
    voice.volume = 0.32;
    voice.play().catch(error => console.warn("Could not play Ohnepixel voice line:", error));
}

function showClunyBotSpeechFromLines(message) {
    if (!selectedClunyBot || selectedClunyBot.name === "Ohnepixel" || !duelBotSpeechBubble) return;
    if (typeof message !== "string" || !message.trim()) return;

    clearTimeout(duelBotSpeechTimer);
    clearTimeout(duelBotSpeechSwapTimer);

    const displayNewMessage = () => {
        duelBotSpeechBubble.textContent = message;
        duelBotSpeechBubble.hidden = false;
        duelBotSpeechBubble.classList.remove("fading", "visible");
        requestAnimationFrame(() => duelBotSpeechBubble.classList.add("visible"));
        // The message stays visible for four seconds, then fades out.
        duelBotSpeechTimer = setTimeout(() => {
            duelBotSpeechBubble.classList.remove("visible");
            duelBotSpeechBubble.classList.add("fading");
            duelBotSpeechSwapTimer = setTimeout(() => {
                duelBotSpeechBubble.hidden = true;
                duelBotSpeechBubble.classList.remove("fading");
                duelBotSpeechBubble.textContent = "";
            }, 280);
        }, 4000);
    };

    if (!duelBotSpeechBubble.hidden && duelBotSpeechBubble.textContent) {
        // Fade out the old bubble before displaying the new one.
        duelBotSpeechBubble.classList.remove("visible");
        duelBotSpeechBubble.classList.add("fading");
        duelBotSpeechSwapTimer = setTimeout(displayNewMessage, 250);
    } else {
        displayNewMessage();
    }
}

function showClunyBotSpeech(category) {
    if (!selectedClunyBot || selectedClunyBot.name === "Ohnepixel") return;
    const lines = clunyBotSpeechLines[selectedClunyBot.name]?.[category];
    if (!Array.isArray(lines) || !lines.length) return;
    showClunyBotSpeechFromLines(lines[Math.floor(Math.random() * lines.length)]);
}

function showClunyBotRoundSpeech(playerCorrect, botCorrect) {
    if (!selectedClunyBot || selectedClunyBot.name === "Ohnepixel") return;
    const botLines = clunyBotSpeechLines[selectedClunyBot.name];
    if (!botLines) return;

    const category = playerCorrect && botCorrect ? "bothCorrect"
        : !playerCorrect && !botCorrect ? "bothWrong"
        : botCorrect && !playerCorrect ? "botCorrectPlayerWrong"
        : "playerCorrectBotWrong";
    const eligibleLines = [...(botLines[category] || [])];

    // During each round, the bot may instead comment on whether it is ahead.
    if (duelBotHP > duelPlayerHP) eligibleLines.push(...(botLines.winning || []));
    else if (duelPlayerHP > duelBotHP) eligibleLines.push(...(botLines.losing || []));

    if (eligibleLines.length) {
        showClunyBotSpeechFromLines(eligibleLines[Math.floor(Math.random() * eligibleLines.length)]);
    }
}


//Feces Cheese
let cheeseSpawnInterval = null;

function spawnDuelCheese() {
    // Only spawn cheese during an active guessing round.
    if (!duelActive || !duelRoundActive) return;

    const cheese = document.createElement("img");

    cheese.src = "cheese.png";
    cheese.alt = "";
    cheese.className = "duel-flying-cheese";

    // Randomise the vertical position.
    cheese.style.top = `${15 + Math.random() * 70}%`;

    // Randomly choose a direction.
    if (Math.random() < 0.5) {
        cheese.classList.add("cheese-reverse");
    }

    document.body.appendChild(cheese);

    // Remove the image once its animation finishes.
    cheese.addEventListener("animationend", () => {
        cheese.remove();
    }, { once: true });
}

function startDuelCheeseEvent() {
    // Prevent multiple simultaneous spawning timers.
    stopDuelCheeseEvent();

    cheeseSpawnInterval = setInterval(() => {
        // A 4% chance per second, but only during an active round.
        if (
            duelActive &&
            duelRoundActive &&
            Math.random() < 0.04
        ) {
            spawnDuelCheese();
        }
    }, 1000);
}

function stopDuelCheeseEvent() {
    if (cheeseSpawnInterval !== null) {
        clearInterval(cheeseSpawnInterval);
        cheeseSpawnInterval = null;
    }

    // Remove any cheese still on screen.
    document.querySelectorAll(".duel-flying-cheese").forEach(cheese => {
        cheese.remove();
    });
}



function selectClunyBot(index) {
    selectedClunyBot = clunyBots[index];
    document.querySelectorAll(".cluny-bot-card").forEach((card, i) => card.classList.toggle("selected", i === index));
    clunyBotInfo.replaceChildren();

    const title = document.createElement("h2");
    title.textContent = selectedClunyBot.name;
    const description = document.createElement("p");
    description.textContent = selectedClunyBot.description;
    const trivia = document.createElement("p");
    trivia.className = "cluny-trivia";
    trivia.textContent = selectedClunyBot.trivia;
    const stats = document.createElement("p");
    stats.textContent = `Base accuracy: ${selectedClunyBot.accuracy}% · Reaction speed: ${selectedClunyBot.speed}`;
    clunyBotInfo.append(title, description, trivia, stats);
    duelModeButtons.forEach(button => button.disabled = false);
}

function showClunyLobby() {
    homeScreen.hidden=true; challengeScreen.hidden=true; guideScreen.hidden=true; gameScreen.hidden=true; duelScreen.hidden=true; clunyLobby.hidden=false;
    renderClunyBots(); populateDuelSpecies();
    duelModeButtons.forEach(button=>button.disabled=!selectedClunyBot);
}

if (clunyCourtButton) clunyCourtButton.addEventListener("click", showClunyLobby);
if (duelExitButton) duelExitButton.addEventListener("click", endDuelAndReturnHome);
const clunyBackButton = document.getElementById("cluny-back-button");
if (clunyBackButton) clunyBackButton.addEventListener("click", () => { clunyLobby.hidden=true; homeScreen.hidden=false; });

duelModeButtons.forEach(button=>button.addEventListener("click",()=>{ if(!selectedClunyBot)return; startDuel(button.dataset.duelMode); }));

function fadeAudio(audio, target, duration=700) {
    if (!audio) return Promise.resolve();
    const start=Number.isFinite(audio.volume)?audio.volume:0; const steps=20; const delay=duration/steps;
    return new Promise(resolve=>{let n=0; const timer=setInterval(()=>{n++; audio.volume=Math.max(0,Math.min(1,start+(target-start)*(n/steps))); if(n>=steps){clearInterval(timer); if(target===0) audio.pause(); resolve();}},delay);});
}

async function startDuelMusic() {
    try {
        if (!duelAudio) {
            duelAudio = new Audio("duelsmusic/duel.mp3");
            duelAudio.loop = true;
        }

        // Start the duel track immediately following the player's button click.
        duelAudio.currentTime = 0;
        duelAudio.volume = 0;

        const playPromise = duelAudio.play();

        // Fade out normal music while duel music begins playing.
        if (activeAudio && !activeAudio.paused) {
            fadeAudio(activeAudio, 0, 700);
        }

        await playPromise;
        fadeAudio(duelAudio, musicVolume, 700);

    } catch (error) {
        console.error("Could not start duel music:", error);
    }
}

async function restoreNormalMusic() {
    if (duelAudio) await fadeAudio(duelAudio,0,550);
    if (typeof activeAudio !== "undefined" && activeAudio) {
        activeAudio.pause(); activeAudio.currentTime=0; activeAudio.src=musicTracks[0]; activeAudio.loop=false; activeAudio.volume=0;
        currentTrack=0; transitionStarted=false; musicStarted=true;
        try { await activeAudio.play(); fadeAudio(activeAudio,musicVolume,700); } catch(e) {}
    }
}
async function startPartyDuelsMusic() {
    if (partyDuelsMusicActive) return;

    partyDuelsMusicActive = true;

    try {
        if (!partyDuelsAudio) {
            partyDuelsAudio = new Audio("duelsmusic/duel.mp3");
            partyDuelsAudio.loop = true;
        }

        partyDuelsAudio.currentTime = 0;
        partyDuelsAudio.volume = 0;

        await partyDuelsAudio.play();

        // Fade out evolving music.
        if (activeAudio && !activeAudio.paused) {
            fadeAudio(activeAudio, 0, 700);
        }

        // Fade in Party Duels music.
        fadeAudio(partyDuelsAudio, musicVolume, 700);

    } catch (error) {
        partyDuelsMusicActive = false;
        console.error("Could not start Party Duels music:", error);
    }
}


async function stopPartyDuelsMusic() {
    if (!partyDuelsMusicActive) return;

    partyDuelsMusicActive = false;

    // Fade out Party Duels music.
    if (partyDuelsAudio) {
        await fadeAudio(partyDuelsAudio, 0, 550);
    }

    // Restart evolving music from Track 1.
    if (useEvolvingMusic && activeAudio) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
        activeAudio.src = musicTracks[0];
        activeAudio.loop = false;
        activeAudio.volume = 0;

        currentTrack = 0;
        transitionStarted = false;
        musicStarted = true;

        try {
            await activeAudio.play();
            fadeAudio(activeAudio, musicVolume, 700);
        } catch (error) {
            console.error("Could not restore evolving music:", error);
        }
    }
}
// ==========================================
// PARTY DUELS MUSIC CONTROL
// ==========================================

async function fadeOutMusicForPartyDuels() {
    if (!useEvolvingMusic || !musicStarted || partyDuelsMusicFaded) return;

    partyDuelsMusicFaded = true;

    // Fade out the current evolving music.
    await fadeAudio(activeAudio, 0, 700);
}

async function fadeInMusicAfterPartyDuels() {
    if (!useEvolvingMusic || !partyDuelsMusicFaded) return;

    partyDuelsMusicFaded = false;

    // Resume the same track from where it was paused.
    activeAudio.volume = 0;

    try {
        await activeAudio.play();
        fadeAudio(activeAudio, musicVolume, 700);
    } catch (error) {
        console.error("Could not resume evolving music:", error);
    }
}

function startDuel(mode) {
    duelEnding = false;
    clearTimeout(duelBotSpeechTimer);
    clearTimeout(duelBotSpeechSwapTimer);
    if (duelBotSpeechBubble) { duelBotSpeechBubble.hidden = true; duelBotSpeechBubble.textContent = ""; duelBotSpeechBubble.classList.remove("visible", "fading"); }
    duelMode=mode; duelActive=true; window.duelActive=true; duelRoundActive=false; duelRoundNumber=0; duelPlayerMultiplierStacks=0; duelBotMultiplierStacks=0;
    duelOpponentName.textContent=selectedClunyBot.name;
    duelOpponentImage.src = selectedClunyBot.image;
    duelOpponentImage.alt = `${selectedClunyBot.name} portrait`;
    duelOpponentImage.hidden = false;
    duelPlayerMaxHP = mode === "classic" ? 5 : (mode === "battle" ? 5000 : 6000);
    duelBotMaxHP = duelPlayerMaxHP;
    duelPlayerHP = duelPlayerMaxHP;
    duelBotHP = duelBotMaxHP;
    duelScreen.classList.toggle("duel-classic-mode", mode === "classic");
    duelPlayerAnswered=false; duelBotAnswered=false;
    clunyLobby.hidden=true; homeScreen.hidden=true; challengeScreen.hidden=true; guideScreen.hidden=true; gameScreen.hidden=true; duelScreen.hidden=false;
    duelImage.style.visibility="visible"; duelImage.style.display="block"; duelReveal.textContent=""; duelRoundMessage.textContent=`${selectedClunyBot.name} — ${mode.toUpperCase()}`;
    duelSubmitButton.disabled=false; duelSpeciesSelect.disabled=false;
    updateDuelHealth(true); startDuelMusic();
    showClunyBotSpeech("start");
    startDuelRound();
}

function updateDuelHealth(animate=false) {
    const pPct=Math.max(0,duelPlayerHP/duelPlayerMaxHP*100), bPct=Math.max(0,duelBotHP/duelBotMaxHP*100);
    duelPlayerHealth.style.width=pPct+"%"; duelBotHealth.style.width=bPct+"%";
    duelPlayerHealthText.textContent=duelMode==="classic"?`${duelPlayerHP}/${duelPlayerMaxHP} hearts`:`${Math.ceil(duelPlayerHP).toLocaleString()} / ${duelPlayerMaxHP.toLocaleString()}`;
    duelBotHealthText.textContent=duelMode==="classic"?`${duelBotHP}/${duelBotMaxHP} hearts`:`${Math.ceil(duelBotHP).toLocaleString()} / ${duelBotMaxHP.toLocaleString()}`;
    duelPlayerHearts.textContent=duelMode==="classic"?"♥ ".repeat(Math.max(0,duelPlayerHP)):""; duelBotHearts.textContent=duelMode==="classic"?"♥ ".repeat(Math.max(0,duelBotHP)):"";

}

function countdownDuel(labels, done) {
    playDuelCountdownSound();
    let i=0; duelCountdown.hidden=false; duelCountdown.textContent=labels[i];
    const tick=()=>{ i++; if(i>=labels.length){duelCountdown.hidden=true;done();return;} duelCountdown.textContent=labels[i]; setTimeout(tick,750); };
    setTimeout(tick,1450);
}

function startDuelRound(skipCountdown = false) {
    if(!duelActive)return;
    clearTimeout(duelTimeout); clearTimeout(duelBotTimeout); clearTimeout(duelRoundDeadline); clearInterval(duelTimerInterval);
    duelRoundNumber++; 
    // Fade out the previous round's image.
duelImage.style.visibility = "visible";
duelImage.style.opacity = "0";
    

const oldWarpLayer = duelImage
    .closest(".duel-image-container")
    ?.querySelector(".cluny-warp-layer");

if (oldWarpLayer) {
    oldWarpLayer.remove();
}
    duelRoundActive=false; duelPlayerAnswered=false; duelBotAnswered=false; duelPlayerTime=null;
    duelSubmitButton.disabled=true; duelSpeciesSelect.disabled=true; duelReveal.textContent=""; duelTimer.textContent="";
    duelRoundMessage.textContent=`Round ${duelRoundNumber} — get ready!`;
    if (skipCountdown) {
    showDuelFish();
} else {
    countdownDuel(["3", "2", "1", "START!"], showDuelFish);
}
}

// ==========================================
// CLUNY COURT: CLOWN WARP
// ==========================================

function applyClunyWarp(challengeFilter) {
    const container = duelImage.closest(".duel-image-container");

    if (!container || !duelImage.src) return;

    const oldLayer = container.querySelector(".cluny-warp-layer");
    if (oldLayer) oldLayer.remove();

    const layer = document.createElement("div");
    layer.className = "cluny-warp-layer";
    layer.style.filter = challengeFilter;

    container.style.position = "relative";

    Object.assign(layer.style, {
        position: "absolute",
        inset: "0",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        zIndex: "5",
        opacity: "0",
        transition: "opacity 0.35s ease",
        pointerEvents: "none"
    });

    const order = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    order.forEach(sourceIndex => {
        const row = Math.floor(sourceIndex / 3);
        const col = sourceIndex % 3;

        const tile = document.createElement("div");
        tile.className = "cluny-warp-tile";
        tile.style.backgroundImage = `url("${duelImage.src}")`;
        tile.style.backgroundSize = "300% 300%";
        tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;

        layer.appendChild(tile);
    });

    container.appendChild(layer);

    duelImage.style.opacity = "0";

    requestAnimationFrame(() => {
        layer.style.opacity = "1";
    });
}


function showDuelFish() {
    if (!duelActive) return;

    const available = Array.isArray(fish) ? fish : [];

    if (!available.length) {
        duelRoundMessage.textContent = "No fish data found.";
        return;
    }

    duelCurrentFish = available[
        Math.floor(Math.random() * available.length)
    ];

    const container = duelImage.closest(".duel-image-container");

    const oldLayer = container?.querySelector(".cluny-warp-layer");
    if (oldLayer) oldLayer.remove();

    // Reset the image.
    duelImage.style.display = "block";
    duelImage.style.visibility = "visible";
    duelImage.style.opacity = "0";
    duelImage.style.transform = "none";
    duelImage.style.filter = "none";

    duelImage.alt = "Clownfish to identify";

    // Down the Clown.
    if (clunyChallenges.upside) {
        duelImage.style.transform = "rotate(180deg)";
    }

    // Build the Morpho and Hazelnut filters.
    const challengeFilters = [];

    if (clunyChallenges.morpho) {
        challengeFilters.push("hue-rotate(180deg)");
    }

    if (clunyChallenges.hazelnut) {
        challengeFilters.push("blur(3px)");
    }

    const challengeFilter = challengeFilters.join(" ");

    // Load the image exactly once.
    let imageLoaded = false;

    function handleDuelImageLoaded() {
        if (imageLoaded || !duelActive) return;

        imageLoaded = true;

        duelImage.style.filter = challengeFilter;
        duelImage.style.visibility = "visible";

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (!duelActive) return;

                if (clunyChallenges.warp) {
                    applyClunyWarp(challengeFilter);
                } else {
                    duelImage.style.opacity = "1";
                }
            });
        });
    }

    duelImage.onload = handleDuelImageLoaded;

    duelImage.onerror = () => {
        duelRoundMessage.textContent =
            "The fish image could not be loaded. Please check the image file.";
    };

    // Start loading only after registering the handlers.
    duelImage.src = duelCurrentFish.image;

    // Handle images already loaded from the browser cache.
    if (duelImage.complete && duelImage.naturalWidth > 0) {
        handleDuelImageLoaded();
    }

    // Reset the species selector.
    if (duelSpeciesSelect.options.length) {
        duelSpeciesSelect.selectedIndex = 0;
    }

    duelRoundActive = true;

    if (selectedClunyBot && selectedClunyBot.name === "Feces") {
        startDuelCheeseEvent();
    }

    duelStartTime = performance.now();

    duelSubmitButton.disabled = false;
    duelSpeciesSelect.disabled = false;
    duelSpeciesSelect.style.pointerEvents = "auto";
    duelSubmitButton.style.pointerEvents = "auto";

    duelRoundMessage.textContent = "Identify the Clown!";

    // NMPZ: hide the image after the short viewing period.
    if (duelMode === "avnj") {
        setTimeout(() => {
            if (duelRoundActive) {
                duelImage.style.opacity = "0";

                const warpLayer = container?.querySelector(".cluny-warp-layer");

                if (warpLayer) {
                    warpLayer.style.opacity = "0";
                }
            }
        }, 510);
    }

    // Determine whether the bot guesses correctly.
    const accuracy = getBotAccuracy();
    duelBotCorrect = Math.random() * 100 < accuracy;

    // Determine the bot's reaction time.
    if (
        Number.isFinite(selectedClunyBot.minGuessTime) &&
        Number.isFinite(selectedClunyBot.maxGuessTime)
    ) {
        duelBotTime = selectedClunyBot.minGuessTime +
            Math.random() * (
                selectedClunyBot.maxGuessTime -
                selectedClunyBot.minGuessTime
            );
    } else {
        const speedBase = selectedClunyBot.speed === "faster"
            ? 1.65
            : (selectedClunyBot.speed === "slower" ? 1.35 : 1);

        duelBotTime = (0.7 + Math.random() * 3.6) * speedBase + 1.5;
    }

    // The bot's decision.
    duelBotTimeout = setTimeout(() => {
        if (duelRoundActive && !duelBotAnswered) {
            duelBotAnswered = true;
            onDuelBotAnswered();
        }
    }, duelBotTime * 1000);

    // Safety limit for a stalled round.
    duelRoundDeadline = setTimeout(
        () => resolveDuelRound(true),
        30000
    );
}


function getBotAccuracy() {
    let accuracy = selectedClunyBot.accuracy;
    const s = duelCurrentFish?.species;

    if (
        selectedClunyBot.name === "Auntie Anna" &&
        (s === "Ocellaris" || s === "Percula")
    ) {
        accuracy = 97;
    }

    if (
        selectedClunyBot.name === "ViperAte" &&
        ["Akallopisos", "Pacificus", "Sandaracinos"].includes(s)
    ) {
        accuracy = 97;
    }

    accuracy -= getClunyChallengePenalty();

    return Math.max(0, accuracy);
}

function onDuelBotAnswered() {
    if(!duelRoundActive)return;
    if(!duelPlayerAnswered) {
        duelTimer.textContent="10"; duelTimer.classList.add("timer-flash");
        clearTimeout(duelRoundDeadline);
        duelRoundDeadline=setTimeout(()=>resolveDuelRound(true),10000);
        let remaining=10; clearInterval(duelTimerInterval);
        duelTimerInterval=setInterval(()=>{remaining--;duelTimer.textContent=String(Math.max(0,remaining));if(remaining<=0)clearInterval(duelTimerInterval);},1000);
        playDuelBell();
    }
    if(duelPlayerAnswered) resolveDuelRound(false);
}

function submitDuelGuess() {
    console.log("FUNCTION BODY ENTERED");
    console.log("Lock In triggered", {
        duelActive,
        duelRoundActive,
        duelPlayerAnswered,
        selectedSpecies: duelSpeciesSelect?.value,
        currentFish: duelCurrentFish?.species
    });

    if (!duelActive) {
        duelRoundMessage.textContent = "The duel is not active.";
        return;
    }

    if (!duelRoundActive) {
        duelRoundMessage.textContent =
            "Please wait for the fish and START countdown.";
        return;
    }

    if (duelPlayerAnswered) {
        duelRoundMessage.textContent =
            "Your guess has already been submitted.";
        return;
    }

    if (!duelSpeciesSelect || duelSpeciesSelect.options.length === 0) {
        duelRoundMessage.textContent = "No species options are loaded.";
        return;
    }

    if (!duelCurrentFish || !duelCurrentFish.species) {
        duelRoundMessage.textContent = "The current fish is not ready.";
        return;
    }

    const selectedSpecies = duelSpeciesSelect.value;

    if (!selectedSpecies) {
        duelRoundMessage.textContent = "Please select a species first!";
        return;
    }

    // Play the bell when the player locks in a valid guess.
    playDuelBell();

    // Record the answer.
    duelPlayerAnswered = true;
    duelPlayerTime = (performance.now() - duelStartTime) / 1000;
    duelPlayerCorrect = selectedSpecies === duelCurrentFish.species;

    // Lock the controls after submission.
    duelSpeciesSelect.disabled = true;
    duelSubmitButton.disabled = true;

    if (duelTimerInterval) {
        clearInterval(duelTimerInterval);
        duelTimerInterval = null;
    }

    duelTimer.classList.remove("timer-flash");

    console.log("Duel guess submitted successfully:", {
        selectedSpecies,
        actualSpecies: duelCurrentFish.species,
        correct: duelPlayerCorrect
    });

    if (duelBotAnswered) {
        resolveDuelRound(false);
    } else {
        duelRoundMessage.textContent =
            "Guess locked in — waiting for opponent…";
    }
}




console.log("1. LOCAL FUNCTION TYPE:", typeof submitDuelGuess);
// Register the duel submission function directly.
window.submitDuelGuess = function () {
    console.log("Lock In triggered", {
        duelActive,
        duelRoundActive,
        duelPlayerAnswered,
        selectedSpecies: duelSpeciesSelect?.value,
        currentFish: duelCurrentFish?.species
    });

    if (!duelActive) {
        duelRoundMessage.textContent = "The duel is not active.";
        return;
    }

    if (!duelRoundActive) {
        duelRoundMessage.textContent =
            "Please wait for the fish and START countdown.";
        return;
    }

    if (duelPlayerAnswered) {
        duelRoundMessage.textContent =
            "Your guess has already been submitted.";
        return;
    }

    if (!duelSpeciesSelect || duelSpeciesSelect.options.length === 0) {
        duelRoundMessage.textContent = "No species options are loaded.";
        return;
    }

    if (!duelCurrentFish || !duelCurrentFish.species) {
        duelRoundMessage.textContent = "The current fish is not ready.";
        return;
    }

    const selectedSpecies = duelSpeciesSelect.value;

    if (!selectedSpecies) {
        duelRoundMessage.textContent = "Please select a species first!";
        return;
    }

    duelPlayerAnswered = true;
    duelPlayerTime = (performance.now() - duelStartTime) / 1000;
    duelPlayerCorrect = selectedSpecies === duelCurrentFish.species;

    duelSpeciesSelect.disabled = true;
    duelSubmitButton.disabled = true;

    if (duelTimerInterval) {
        clearInterval(duelTimerInterval);
        duelTimerInterval = null;
    }

    duelTimer.classList.remove("timer-flash");

    console.log("Duel guess submitted successfully:", {
        selectedSpecies,
        actualSpecies: duelCurrentFish.species,
        correct: duelPlayerCorrect
    });

    if (duelBotAnswered) {
        resolveDuelRound(false);
    } else {
        duelRoundMessage.textContent =
            "Guess locked in — waiting for opponent…";
    }
};

console.log(
    "DUEL SUBMISSION REGISTERED:",
    typeof window.submitDuelGuess
);

if (duelSubmitButton) {
    duelSubmitButton.onclick = function (event) {
        event.preventDefault();

        if (typeof window.submitDuelGuess !== "function") {
            console.error("Duel submission function is unavailable.");
            duelRoundMessage.textContent =
                "Guess error: submission function is unavailable.";
            return;
        }

        try {
            window.submitDuelGuess();
            playDuelBell();
        } catch (error) {
            console.error("Cluny Court guess failed:", error);
            duelRoundMessage.textContent =
                "Guess error: " + error.message;
        }
    };
}

function showFloatingDamage(target, text, healing=false) {
    const el=document.createElement("span"); el.className="floating-damage"+(healing?" healing":""); el.textContent=text; target.parentElement.appendChild(el); setTimeout(()=>el.remove(),1700);
}

function showFloatingHealing(healthElement, amount) {
    if (!healthElement || !Number.isFinite(amount) || amount <= 0) return;

    const container = healthElement.parentElement;
    const healing = document.createElement("div");

    healing.className = "duel-floating-healing";
    healing.textContent = `+${amount.toLocaleString()}`;

    container.appendChild(healing);

    setTimeout(() => {
        healing.remove();
    }, 1200);
}


function resolveDuelRound(timedOut=false) {
    if(!duelActive||!duelRoundActive)return;
    stopDuelCheeseEvent();
    fadeAudio(duelAudio, musicVolume * 0.65, 400);
    duelRoundActive=false; clearTimeout(duelTimeout); clearTimeout(duelBotTimeout); clearTimeout(duelRoundDeadline); clearInterval(duelTimerInterval); duelTimer.classList.remove("timer-flash"); duelTimer.textContent="";
    if(!duelBotAnswered) duelBotAnswered=true;
    if(!duelPlayerAnswered) {duelPlayerCorrect=false; duelPlayerTime=null;}
    const playerCorrect=duelPlayerAnswered&&duelPlayerCorrect; const botCorrect=duelBotCorrect;
    playOhnepixelVoiceLine(playerCorrect, botCorrect);
    const revealScreen = document.getElementById("duel-reveal-screen");
    if (revealScreen) { revealScreen.hidden = true; revealScreen.classList.remove("visible", "final"); revealScreen.textContent = ""; }
    // Ding before revealing the clown's identity.
    playDuelBell();

    duelReveal.textContent = `The Clown was: ${duelCurrentFish.species}`;
    duelReveal.textContent = `The Clown was: ${duelCurrentFish.species}`;
    duelRoundMessage.textContent=`You: ${playerCorrect?"CORRECT":"WRONG"} · ${selectedClunyBot.name}: ${botCorrect?"CORRECT":"WRONG"}`;
    if (duelMode !== "classic" && duelPlayerCorrect && duelBotCorrect) {
        // In non-Classic modes, both correct guesses restore up to 15 health.
        // Display only the amount actually restored.
        const playerHeal = Math.min(15, duelPlayerMaxHP - duelPlayerHP);
        const botHeal = Math.min(15, duelBotMaxHP - duelBotHP);
        duelPlayerHP += playerHeal;
        duelBotHP += botHeal;
        showFloatingHealing(duelPlayerHealth, playerHeal);
        showFloatingHealing(duelBotHealth, botHeal);

    } else if (duelMode !== "classic" && !duelPlayerCorrect && !duelBotCorrect) {
        // In non-Classic modes, both wrong guesses restore up to 750 health.
        const playerHeal = Math.min(750, duelPlayerMaxHP - duelPlayerHP);
        const botHeal = Math.min(750, duelBotMaxHP - duelBotHP);
        duelPlayerHP += playerHeal;
        duelBotHP += botHeal;
        showFloatingHealing(duelPlayerHealth, playerHeal);
        showFloatingHealing(duelBotHealth, botHeal);

    } else if (playerCorrect !== botCorrect) {
        // Classic never heals: matching results cause no health change.
        const correctTime=playerCorrect?duelPlayerTime:duelBotTime;
        let damage=duelMode==="classic"?1:Math.max(100,Math.min(1500,1500-(2550/19.9)*(Math.max(0.1,correctTime)-0.1)));
        if(duelMode==="avnj") {
            if(playerCorrect) { duelPlayerMultiplierStacks++; damage*=1+0.1*duelPlayerMultiplierStacks; }
            else { duelBotMultiplierStacks++; damage*=1+0.1*duelBotMultiplierStacks; }
            playDuelHealthLossSound();
        }
        const rounded=Math.round(damage);
        if(playerCorrect) {duelBotHP=Math.max(0,duelBotHP-rounded);showFloatingDamage(duelBotHealth,duelMode==="classic"?"−1":`−${rounded.toLocaleString()}`);}
        else {duelPlayerHP=Math.max(0,duelPlayerHP-rounded);showFloatingDamage(duelPlayerHealth,duelMode==="classic"?"−1":`−${rounded.toLocaleString()}`);}
        playDuelHealthLossSound();
    }
    updateDuelHealth(true);
    if(duelPlayerHP<=0||duelBotHP<=0) {
        const won=duelBotHP<=0&&duelPlayerHP>0; duelRoundMessage.textContent=won?"WINNER!":"LOSER...";
        duelReveal.textContent = `${won ? "WINNER!" : "LOSER..."} The Clown was: ${duelCurrentFish.species}`;
        showClunyBotSpeech(won ? "botLoses" : "botWins");
        setTimeout(endDuelAndReturnHome, 4300); return;
    }
    showClunyBotRoundSpeech(playerCorrect, botCorrect);
    duelSubmitButton.disabled=true; duelSpeciesSelect.disabled=true;
    setTimeout(() => {
        if (!duelActive) return;

        duelReveal.textContent = "";

        // Restore normal duel music volume as the countdown begins.
        fadeAudio(duelAudio, musicVolume, 800);

        duelImage.style.visibility = "visible";
        duelImage.style.opacity = "0";

        countdownDuel(
            ["3", "2", "1", "CLOWN!"],
            () => startDuelRound(true)
        );
    }, 1500);   
}

// ==========================================
// FADE OUT OF CLUNY COURT AND RETURN HOME
// ==========================================

let duelEnding = false;

async function endDuelAndReturnHome() {
    // Prevent multiple transitions from starting simultaneously.
    if (duelEnding) return;

    duelEnding = true;

    // Stop the duel immediately.
    duelActive = false;
    window.duelActive = false;
    duelRoundActive = false;
    clearTimeout(duelBotSpeechTimer);
    clearTimeout(duelBotSpeechSwapTimer);
    if (duelBotSpeechBubble) { duelBotSpeechBubble.hidden = true; duelBotSpeechBubble.textContent = ""; duelBotSpeechBubble.classList.remove("visible", "fading"); }

    clearTimeout(duelTimeout);
    clearTimeout(duelBotTimeout);
    clearTimeout(duelRoundDeadline);
    clearInterval(duelTimerInterval);

    if (duelCountdown) {
        duelCountdown.hidden = true;
    }

    // Remove any remaining reveal text.
    const revealScreen =
        document.getElementById("duel-reveal-screen");

    if (revealScreen) {
        revealScreen.hidden = true;
        revealScreen.classList.remove("visible", "final");
        revealScreen.textContent = "";
    }

    if (duelReveal) {
        duelReveal.textContent = "";
    }

    // Get the existing page background.
    const bodyStyle = getComputedStyle(document.body);
    const rootStyle = getComputedStyle(document.documentElement);

    const isTransparent = colour =>
        !colour ||
        colour === "transparent" ||
        colour === "rgba(0, 0, 0, 0)";

    let backgroundColour = !isTransparent(bodyStyle.backgroundColor)
        ? bodyStyle.backgroundColor
        : rootStyle.backgroundColor;

    // Use the home screen's background if the page background
    // is transparent.
    if (isTransparent(backgroundColour)) {
        const homeStyle = getComputedStyle(homeScreen);

        backgroundColour = !isTransparent(homeStyle.backgroundColor)
            ? homeStyle.backgroundColor
            : "#0b4f8a";
    }

    // Reuse the page's background image or gradient when possible.
    let backgroundImage =
        bodyStyle.backgroundImage !== "none"
            ? bodyStyle.backgroundImage
            : rootStyle.backgroundImage;

    // Create the full-screen fade overlay.
    const overlay = document.createElement("div");

    overlay.setAttribute("aria-hidden", "true");

    Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        zIndex: "2147483647",
        pointerEvents: "none",
        opacity: "0",
        backgroundColor: backgroundColour,
        backgroundImage: backgroundImage,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "opacity 600ms ease"
    });

    document.body.appendChild(overlay);

    // Fade the duel screen into the background colour.
    requestAnimationFrame(() => {
        overlay.style.opacity = "1";
    });

    await new Promise(resolve => setTimeout(resolve, 650));

    // Hide the duel-related screens while the overlay
    // completely covers the page.
    if (duelScreen) {
        duelScreen.hidden = true;
    }

    if (clunyLobby) {
        clunyLobby.hidden = true;
    }

    challengeScreen.hidden = true;
    guideScreen.hidden = true;
    gameScreen.hidden = true;

    // Prepare the Home Screen behind the overlay.
    homeScreen.hidden = false;
    homeScreen.style.transition = "opacity 650ms ease";
    homeScreen.style.opacity = "0";

    // Restore the normal gameplay music.
    restoreNormalMusic();

    // Allow the browser to apply the hidden starting state.
    void homeScreen.offsetWidth;

    // Fade the Home Screen in while the overlay fades away.
    requestAnimationFrame(() => {
        homeScreen.style.opacity = "1";
        overlay.style.opacity = "0";
    });

    await new Promise(resolve => setTimeout(resolve, 700));

    // Clean up the temporary overlay and inline styles.
    overlay.remove();

    homeScreen.style.transition = "";
    homeScreen.style.opacity = "";

    duelEnding = false;
}

// A global spacebar still works in the regular game; during a duel it locks in a guess.
// DUEL INPUT CONTROLS
// Spacebar = lock in; Escape = leave duel.
// Spacebar submits a guess during Cluny Court.
document.addEventListener("keydown", function (event) {
    if (!window.duelActive || event.code !== "Space") return;

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.target.tagName === "SELECT"
    ) {
        return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    if (duelRoundActive && !duelPlayerAnswered) {
        submitDuelGuess();
        playDuelBell();
    }
}, true);



// Right-click anywhere on the duel screen.
if (duelScreen) {
    duelScreen.addEventListener("contextmenu", function (event) {
        event.preventDefault();

        if (duelActive && duelRoundActive && !duelPlayerAnswered) {
            submitDuelGuess();
            playDuelBell();
        }
    });
}





// Build bot grid and fill duel dropdown once the HTML is ready (script is at body end).
renderClunyBots(); populateDuelSpecies(); updateDuelHealth();




// ==========================================
// CLOWN CONVENTION — CREATE CONVENTION
// ==========================================

(() => {
    const menuScreen = document.getElementById("convention-menu-screen");
    const createScreen = document.getElementById("convention-create-screen");
    const joinScreen = document.getElementById("convention-join-screen");
    const lobbyScreen = document.getElementById("convention-lobby-screen");
    const createStatus = document.getElementById("convention-create-status");
    const joinStatus = document.getElementById("convention-join-status");
    const lobbyStatus = document.getElementById("convention-lobby-status");
    const playerList = document.getElementById("convention-player-list");
    const requestsSection = document.getElementById("convention-join-requests");
    const requestList = document.getElementById("convention-request-list");

    if (!menuScreen || !createScreen || !joinScreen || !lobbyScreen) return;

    let activePartyCode = null;
    let activeUserUid = null;
    let activeIsHost = false;
    let membersListener = null;
    let requestsListener = null;
    let approvalListener = null;
    let ownRequestListener = null;
    let partyDetailsListener = null;
    let pointPartyGameStateListener = null;
    let pointPartyStatusListener = null;
    let pointPartyGuessesListener = null;
    let pointPartyGuessesListenerRound = null;
    let pointPartyLiveListenersActive = false;
    let currentPartyData = null;

    const startGameButton = document.getElementById("start-convention-game-button");
    const lobbySettingsDetails = document.getElementById("convention-lobby-settings-details");
    const settingsEditor = document.getElementById("convention-settings-editor");
    const pointPartyStopButton = document.getElementById("point-party-stop-button");
    const partyDuelsStopButton = document.getElementById("party-duels-stop");

    // A player's assigned colour is stored in Firebase as one of these keys.
    const conventionNameColours = {
        red: "#e53935",
        maroon: "#800000",
        orange: "#e87500",
        green: "#2e8b57",
        darkGreen: "#006400",
        darkYellow: "#a87900",
        blue: "#1565c0",
        violet: "#8a2be2",
        purple: "#800080",
        pink: "#d81b60"
    };

    function assignRandomNameColour() {
        const colourKeys = Object.keys(conventionNameColours);
        return colourKeys[Math.floor(Math.random() * colourKeys.length)];
    }

    function showConventionScreen(screenToShow) {
        [homeScreen, challengeScreen, guideScreen, gameScreen,
         document.getElementById("cluny-lobby"), document.getElementById("duel-screen"),
         menuScreen, createScreen, joinScreen, lobbyScreen, pointPartyScreen, partyDuelsScreen].forEach(screen => {
            if (screen) screen.hidden = screen !== screenToShow;
        });
    }

    function selectedMode() {
        return document.querySelector('input[name="convention-mode"]:checked')?.value || "duels";
    }

    function updateModeSettings() {
        const pointParty = selectedMode() === "pointParty";
        document.getElementById("point-party-settings").hidden = !pointParty;
        document.getElementById("duels-settings").hidden = pointParty;
    }

    function makePartyCode() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomValues = new Uint8Array(4);
        if (window.crypto?.getRandomValues) {
            window.crypto.getRandomValues(randomValues);
            return Array.from(randomValues, value => letters[value % letters.length]).join("");
        }
        return Array.from({ length: 4 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    }

    function showPlayers(members) {
        playerList.replaceChildren();
        const entries = Object.values(members || {}).sort((a, b) => {
            if (a.role === "host") return -1;
            if (b.role === "host") return 1;
            return (a.joinedAt || 0) - (b.joinedAt || 0);
        });

        if (!entries.length) {
            const item = document.createElement("li");
            item.textContent = "No players yet.";
            playerList.appendChild(item);
            return;
        }

        entries.forEach(member => {
            const item = document.createElement("li");
            const name = document.createElement("span");
            name.textContent = member.name || "Unnamed player";
            const assignedColour = conventionNameColours[member.nameColour];
            name.style.color = assignedColour || "#263238";
            item.appendChild(name);

            if (member.role === "host") {
                const hostLabel = document.createElement("span");
                hostLabel.textContent = " — Host";
                hostLabel.style.color = "#263238";
                item.appendChild(hostLabel);
            }
            playerList.appendChild(item);
        });
    }

    function stopPartyListeners() {
        clearPointPartyTimers();
        stopPointPartyLiveListeners();
        if (!window.clownFirebase) return;
        const database = window.clownFirebase.database;
        if (membersListener && activePartyCode) database.ref(`parties/${activePartyCode}/members`).off("value", membersListener);
        if (requestsListener && activePartyCode) database.ref(`joinRequests/${activePartyCode}`).off("value", requestsListener);
        if (approvalListener && activePartyCode && activeUserUid) database.ref(`parties/${activePartyCode}/members/${activeUserUid}`).off("value", approvalListener);
        if (ownRequestListener && activePartyCode && activeUserUid) database.ref(`joinRequests/${activePartyCode}/${activeUserUid}`).off("value", ownRequestListener);
        if (partyDetailsListener && activePartyCode) database.ref(`parties/${activePartyCode}`).off("value", partyDetailsListener);
        membersListener = null;
        requestsListener = null;
        approvalListener = null;
        ownRequestListener = null;
        partyDetailsListener = null;
    }

    // ==========================================
    // POINT PARTY — SYNCHRONISED MULTIPLAYER GAME
    // ==========================================
    const pointPartyScreen = document.getElementById("point-party-screen");
    const partyDuelsScreen = document.getElementById("party-duels-screen");
    const pointPartyImage = document.getElementById("point-party-image");
    const pointPartyWarpLayer = document.getElementById("point-party-warp-layer");
    const pointPartySelect = document.getElementById("point-party-species-select");
    const pointPartySubmit = document.getElementById("point-party-submit-button");
    const pointPartyStatus = document.getElementById("point-party-status");
    const pointPartyTimerDisplay = document.getElementById("point-party-timer");
    const pointPartyRoundDisplay = document.getElementById("point-party-round");
    const pointPartyResults = document.getElementById("point-party-results");
    const pointPartyLeaderboard = document.getElementById("point-party-leaderboard-list");
    const pointPartyGuessArea = document.getElementById("point-party-guess-area");

    let pointPartyTimerInterval = null;
    let pointPartyHostTimer = null;
    let pointPartyResultsTimer = null;
    let pointPartyHostTimerKey = null;
    let pointPartyResultsTimerKey = null;
    let pointPartyRenderedRoundKey = null;
    let pointPartyStartingRound = false;
    let pointPartyEndingRoundKey = null;
    let pointPartySubmissionPending = false;
    let pointPartyServerTimeOffset = 0;
    let pointPartyServerTimeListenerAttached = false;

    function attachPointPartyServerTimeListener() {
        if (pointPartyServerTimeListenerAttached) return;

        pointPartyServerTimeListenerAttached = true;

        window.clownFirebase.database.ref(".info/serverTimeOffset").on("value", snapshot => {
            pointPartyServerTimeOffset = Number(snapshot.val()) || 0;
        });
    }

    function pointPartyNow() {
        return Date.now() + pointPartyServerTimeOffset;
    }

    // The existing species list is reused, so Point Party always offers the
    // same answers as the single-player game.
    if (pointPartySelect && Array.isArray(species)) {
        pointPartySelect.replaceChildren();
        species.forEach(speciesName => {
            const option = document.createElement("option");
            option.value = speciesName;
            option.textContent = speciesName;
            pointPartySelect.appendChild(option);
        });
    }

    function clearPointPartyTimers() {
        if (pointPartyTimerInterval) clearInterval(pointPartyTimerInterval);
        if (pointPartyHostTimer) clearTimeout(pointPartyHostTimer);
        if (pointPartyResultsTimer) clearTimeout(pointPartyResultsTimer);
        pointPartyTimerInterval = null;
        pointPartyHostTimer = null;
        pointPartyResultsTimer = null;
        pointPartyHostTimerKey = null;
        pointPartyResultsTimerKey = null;
    }

    function makePointPartyTileOrder() {
        const order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        return order;
    }

    function calculatePointPartyBaseScore(elapsedMs) {
        const seconds = Math.max(0, elapsedMs) / 1000;
        const curve = [
            [2, 100], [2.5, 90], [3, 80], [4, 70], [5, 60],
            [6, 50], [7, 35], [8, 20], [9, 10], [10, 5]
        ];
        if (seconds <= curve[0][0]) return 100;
        if (seconds >= 10) return 5;
        for (let i = 1; i < curve.length; i++) {
            const [upperTime, upperScore] = curve[i];
            const [lowerTime, lowerScore] = curve[i - 1];
            if (seconds <= upperTime) {
                const fraction = (seconds - lowerTime) / (upperTime - lowerTime);
                return Math.floor(lowerScore + (upperScore - lowerScore) * fraction);
            }
        }
        return 5;
    }

    function pointPartyMultiplier(settings, roundNumber) {
        return settings.pointBoost ? 1 + (0.1 * Math.max(0, roundNumber - 1)) : 1;
    }

    function renderPointPartyLeaderboard(party) {
        pointPartyLeaderboard.replaceChildren();
        const members = party.members || {};
        const ranked = Object.entries(members).sort((a, b) => {
            const scoreDifference = (Number(b[1].score) || 0) - (Number(a[1].score) || 0);
            if (scoreDifference) return scoreDifference;
            return (a[1].joinedAt || 0) - (b[1].joinedAt || 0);
        });
        ranked.forEach(([uid, member], index) => {
            const item = document.createElement("li");
            const name = document.createElement("span");
            name.textContent = `${index + 1}. ${member.name || "Unnamed player"}`;
            const colourMap = {
                red: "#e53935", maroon: "#800000", orange: "#e87500",
                green: "#2e8b57", darkGreen: "#006400", darkYellow: "#a87900",
                blue: "#1565c0", violet: "#8a2be2", purple: "#800080", pink: "#d81b60"
            };
            name.style.color = colourMap[member.nameColour] || "#263238";
            const score = document.createElement("strong");
            score.textContent = `${Number(member.score) || 0} pts`;
            item.append(name, score);
            if (uid === activeUserUid) item.style.border = "2px solid #0077b6";
            pointPartyLeaderboard.appendChild(item);
        });
    }

    function renderPointPartyRoundResults(party, isFinal = false) {
        const state = party.gameState || {};
        const members = party.members || {};
        const roundScores = state.roundScores || {};
        pointPartyResults.hidden = false;
        pointPartyGuessArea.hidden = true;
        pointPartyResults.querySelector("h2").textContent = isFinal ? "Final Results" : `Round ${state.roundNumber} Results`;
        document.getElementById("point-party-answer").textContent = state.answer
            ? `The correct species was ${state.answer}.`
            : "The Convention has finished.";

        const scoreList = document.getElementById("point-party-round-scores");
        scoreList.replaceChildren();
        if (!isFinal) {
            const ranked = Object.entries(members).sort((a, b) =>
                (Number(roundScores[b[0]]?.points) || 0) - (Number(roundScores[a[0]]?.points) || 0)
            );
            ranked.forEach(([uid, member]) => {
                const row = document.createElement("p");
                const details = roundScores[uid] || { points: 0, correct: false };
                row.textContent = `${member.name || "Player"}: ${details.correct ? "Correct" : "No points"} — ${Number(details.points) || 0} points`;
                scoreList.appendChild(row);
            });
        }
        pointPartyStatus.textContent = isFinal
            ? "All rounds are complete. Here are the final standings!"
            : "Round complete! The next round will begin shortly.";
        renderPointPartyLeaderboard(party);
    }

    function renderPointPartyImage(party, roundKey) {
        const state = party.gameState || {};
        const challengeState = state.challengeState || {};
        const challenges = party.settings?.challenges || {};
        const transform = `scaleX(${challengeState.flipX ? -1 : 1}) scaleY(${challengeState.upsideDown ? -1 : 1})`;
        const filter = challengeState.morpho ? "invert(1)" : "none";
        pointPartyImage.style.transform = transform;
        pointPartyImage.style.filter = filter;
        pointPartyImage.style.imageRendering = challengeState.hazelnut ? "pixelated" : "auto";
        pointPartyImage.style.visibility = "visible";
        pointPartyWarpLayer.hidden = !challengeState.warp;
        pointPartyWarpLayer.replaceChildren();

        let imageProcessed = false;
        const finishImageLoad = () => {
            if (imageProcessed || !pointPartyImage.naturalWidth) return;
            imageProcessed = true;
            let displaySource = pointPartyImage.src;
            if (challengeState.hazelnut && pointPartyImage.naturalWidth) {
                try {
                    const canvas = document.createElement("canvas");
                    const width = 48;
                    const height = Math.max(1, Math.round(width * pointPartyImage.naturalHeight / pointPartyImage.naturalWidth));
                    canvas.width = width;
                    canvas.height = height;
                    const context = canvas.getContext("2d");
                    context.imageSmoothingEnabled = true;
                    context.drawImage(pointPartyImage, 0, 0, width, height);
                    displaySource = canvas.toDataURL("image/jpeg", 0.4);
                    pointPartyImage.onload = null;
                    pointPartyImage.src = displaySource;
                } catch (error) {
                    console.warn("Point Party pixelation could not be applied:", error);
                }
            }
            if (challengeState.warp) {
                const order = Array.isArray(challengeState.tileOrder) ? challengeState.tileOrder : makePointPartyTileOrder();
                order.forEach(sourceIndex => {
                    const tile = document.createElement("div");
                    tile.className = "point-party-warp-tile";
                    const sourceRow = Math.floor(sourceIndex / 3);
                    const sourceCol = sourceIndex % 3;
                    tile.style.backgroundImage = `url("${displaySource}")`;
                    tile.style.backgroundSize = "300% 300%";
                    tile.style.backgroundPosition = `${sourceCol * 50}% ${sourceRow * 50}%`;
                    pointPartyWarpLayer.appendChild(tile);
                });
                pointPartyWarpLayer.style.transform = transform;
                pointPartyWarpLayer.style.filter = filter;
                pointPartyImage.style.opacity = "0";
            } else {
                pointPartyImage.style.opacity = "1";
            }
        };
        pointPartyImage.onload = finishImageLoad;
        pointPartyImage.onerror = () => {
            pointPartyStatus.textContent = "This fish image could not be loaded. Please tell the host.";
            console.error("Point Party could not load image:", state.image);
        };
        pointPartyImage.src = state.image || "";
        // Reusing the same fish URL may not trigger another load event in every browser.
        if (pointPartyImage.complete && pointPartyImage.naturalWidth) finishImageLoad();
        document.getElementById("point-party-challenges").textContent = [
            challenges.blink ? "Blink Mode" : null,
            challenges.downTheClown ? "Down the Clown" : null,
            challenges.clownMorpho ? "Clown Morpho" : null,
            challenges.clownWarp ? "Clown Warp" : null,
            challenges.clownHazelnut ? "Clown Hazelnut" : null
        ].filter(Boolean).join(" · ") || "No optional challenges this game";
    }

    function updatePointPartyRoundUI(party) {
        const state = party.gameState || {};
        const roundNumber = Number(state.roundNumber) || 1;
        const roundKey = `${roundNumber}:${state.startedAt || 0}`;
        const myGuess = party.guesses?.[roundNumber]?.[activeUserUid];
        const totalPlayers = Object.keys(party.members || {}).length;
        const submittedCount = Object.keys(party.guesses?.[roundNumber] || {}).length;

        pointPartyRoundDisplay.textContent = `Round ${roundNumber} of ${Number(party.settings?.rounds) || 0}`;
        pointPartyResults.hidden = true;
        pointPartyGuessArea.hidden = false;
        renderPointPartyLeaderboard(party);

        if (pointPartyRenderedRoundKey !== roundKey) {
            pointPartyRenderedRoundKey = roundKey;
            pointPartySubmissionPending = false;
            pointPartySelect.value = species[0] || "";
            pointPartySelect.disabled = false;
            pointPartySubmit.disabled = false;
            renderPointPartyImage(party, roundKey);
            if (pointPartyTimerInterval) clearInterval(pointPartyTimerInterval);
            pointPartyTimerInterval = setInterval(() => {
                const remaining = Math.max(0, Number(state.endsAt) - pointPartyNow());
                pointPartyTimerDisplay.textContent = `${(remaining / 1000).toFixed(1)}s`;
                if (party.settings?.challenges?.blink) {
                    const visible = (pointPartyNow() - Number(state.startedAt)) % 900 < 450;
                    pointPartyImage.style.visibility = visible ? "visible" : "hidden";
                    pointPartyWarpLayer.style.visibility = visible ? "visible" : "hidden";
                } else {
                    pointPartyImage.style.visibility = "visible";
                    pointPartyWarpLayer.style.visibility = "visible";
                }
                if (remaining <= 0) {
                    pointPartySelect.disabled = true;
                    pointPartySubmit.disabled = true;
                }
            }, 100);
        }

        const remaining = Math.max(0, Number(state.endsAt) - pointPartyNow());
        pointPartyTimerDisplay.textContent = `${(remaining / 1000).toFixed(1)}s`;
        if (myGuess) {
            pointPartySelect.disabled = true;
            pointPartySubmit.disabled = true;
            pointPartyStatus.textContent = `Your guess is locked in. ${submittedCount} of ${totalPlayers} players have answered.`;
        } else if (remaining <= 0) {
            pointPartySelect.disabled = true;
            pointPartySubmit.disabled = true;
            pointPartyStatus.textContent = `Time is up. ${submittedCount} of ${totalPlayers} players submitted a guess.`;
        } else {
            pointPartyStatus.textContent = `${submittedCount} of ${totalPlayers} players have answered.`;
        }
    }

    async function startPointPartyRound(party, requestedRoundNumber) {
        if (!activeIsHost || !activePartyCode || pointPartyStartingRound) return;
        pointPartyStartingRound = true;
        try {
            const database = window.clownFirebase.database;
            const snapshot = await database.ref(`parties/${activePartyCode}`).once("value");
            const freshParty = snapshot.val();
            if (!freshParty || freshParty.status !== "playing") return;
            const roundNumber = requestedRoundNumber || ((Number(freshParty.gameState?.roundNumber) || 0) + 1);
            const totalRounds = Number(freshParty.settings?.rounds) || 10;
            if (roundNumber > totalRounds) {
                await database.ref(`parties/${activePartyCode}/gameState`).update({
                    phase: "finished", finishedAt: pointPartyNow(), updatedAt: pointPartyNow()
                });
                await database.ref(`parties/${activePartyCode}/status`).set("finished");
                return;
            }
            const selectedFish = fish[Math.floor(Math.random() * fish.length)];
            if (!selectedFish) throw new Error("The fish database is empty.");
            const challenges = freshParty.settings?.challenges || {};
            const now = pointPartyNow();
            const durationMs = (Number(freshParty.settings?.roundTimeSeconds) || 20) * 1000;
            const challengeState = {
                flipX: Math.random() < 0.5,
                upsideDown: challenges.downTheClown === true,
                morpho: challenges.clownMorpho === true,
                warp: challenges.clownWarp === true,
                hazelnut: challenges.clownHazelnut === true,
                tileOrder: challenges.clownWarp === true ? makePointPartyTileOrder() : []
            };
            // A Convention can be restarted, so an old round number may already
            // have guesses stored under it. Clear them before publishing the round.
            await database.ref(`parties/${activePartyCode}/guesses/${roundNumber}`).remove();
            pointPartyEndingRoundKey = null;
            await database.ref(`parties/${activePartyCode}/gameState`).set({
                phase: "round",
                roundNumber,
                image: selectedFish.image,
                startedAt: now,
                endsAt: now + durationMs,
                challengeState,
                updatedAt: now
            });
        } catch (error) {
            console.error("Could not start the next Point Party round:", error);
            pointPartyStatus.textContent = "The host could not start the next round. Please check the connection.";
        } finally {
            pointPartyStartingRound = false;
        }
    }

    async function endPointPartyRound(roundNumber) {
        if (!activeIsHost || !activePartyCode) return;
        const endingKey = `${activePartyCode}:${roundNumber}`;
        if (pointPartyEndingRoundKey === endingKey) return;
        pointPartyEndingRoundKey = endingKey;
        try {
            const database = window.clownFirebase.database;
            const snapshot = await database.ref(`parties/${activePartyCode}`).once("value");
            const party = snapshot.val();
            if (!party || party.status !== "playing" || party.gameState?.phase !== "round" || Number(party.gameState.roundNumber) !== Number(roundNumber)) return;
            const answerFish = fish.find(entry => entry.image === party.gameState.image);
            if (!answerFish) throw new Error(`The fish database does not contain ${party.gameState.image}`);

            const members = party.members || {};
            const guesses = party.guesses?.[roundNumber] || {};
            const multiplier = pointPartyMultiplier(party.settings || {}, roundNumber);
            const roundScores = {};
            const memberScoreUpdates = {};
            Object.entries(members).forEach(([uid, member]) => {
                const guess = guesses[uid];
                const correct = !!guess && guess.species === answerFish.species;
                const elapsedMs = guess ? Math.max(0, Number(guess.elapsedMs) || 0) : null;
                const basePoints = correct ? calculatePointPartyBaseScore(elapsedMs) : 0;
                const points = correct ? Math.floor(basePoints * multiplier) : 0;
                roundScores[uid] = { correct, elapsedMs, basePoints, multiplier, points };
                memberScoreUpdates[`${uid}/score`] = (Number(member.score) || 0) + points;
            });

            await database.ref(`parties/${activePartyCode}/members`).update(memberScoreUpdates);
            const resultsEndsAt = pointPartyNow() + 6500;
            await database.ref(`parties/${activePartyCode}/gameState`).update({
                phase: "results",
                answer: answerFish.species,
                roundScores,
                resultsEndsAt,
                updatedAt: pointPartyNow()
            });
        } catch (error) {
            console.error("Could not finish Point Party round:", error);
            pointPartyStatus.textContent = "The host could not calculate this round's results. Please check the connection.";
            pointPartyEndingRoundKey = null;
        }
    }

    function schedulePointPartyHostRoundEnd(party) {
        if (!activeIsHost) return;
        const state = party.gameState || {};
        const roundNumber = Number(state.roundNumber) || 0;
        const timerKey = `${roundNumber}:${state.startedAt || 0}`;
        const memberUids = Object.keys(party.members || {});
        const roundGuesses = party.guesses?.[roundNumber] || {};
        const everyoneHasGuessed = memberUids.length > 0 && memberUids.every(uid => !!roundGuesses[uid]);

        if (pointPartyHostTimerKey !== timerKey) {
            if (pointPartyHostTimer) clearTimeout(pointPartyHostTimer);
            pointPartyHostTimerKey = timerKey;
            const delay = Math.max(0, Number(state.endsAt) - pointPartyNow());
            pointPartyHostTimer = setTimeout(() => endPointPartyRound(roundNumber), delay + 250);
        }

        if (everyoneHasGuessed && pointPartyEndingRoundKey !== `${activePartyCode}:${roundNumber}`) {
            if (pointPartyHostTimer) clearTimeout(pointPartyHostTimer);
            pointPartyHostTimer = setTimeout(() => endPointPartyRound(roundNumber), 150);
        }
    }

    function schedulePointPartyNextRound(party) {
        if (!activeIsHost) return;
        const state = party.gameState || {};
        const timerKey = `${state.roundNumber}:${state.resultsEndsAt || 0}`;
        if (pointPartyResultsTimerKey === timerKey) return;
        if (pointPartyResultsTimer) clearTimeout(pointPartyResultsTimer);
        pointPartyResultsTimerKey = timerKey;
        const delay = Math.max(0, Number(state.resultsEndsAt) - pointPartyNow());
        pointPartyResultsTimer = setTimeout(() => {
            const totalRounds = Number(party.settings?.rounds) || 10;
            if (Number(state.roundNumber) >= totalRounds) {
                const database = window.clownFirebase.database;
                database.ref(`parties/${activePartyCode}/gameState`).update({
                    phase: "finished", finishedAt: pointPartyNow(), updatedAt: pointPartyNow()
                }).then(() => database.ref(`parties/${activePartyCode}/status`).set("finished"))
                  .catch(error => console.error("Could not finish Point Party:", error));
            } else {
                startPointPartyRound(party, Number(state.roundNumber) + 1);
            }
        }, delay);
    }

    function handlePointPartyState(party) {
        if (!party || party.mode !== "pointParty") return;
        const state = party.gameState || {};
        if (party.status === "waiting" && state.phase === "lobby") {
            clearPointPartyTimers();
            pointPartyRenderedRoundKey = null;
            pointPartyEndingRoundKey = null;
            pointPartySubmissionPending = false;
            pointPartySelect.disabled = false;
            pointPartySubmit.disabled = false;
            pointPartyStopButton.hidden = true;
            settingsEditor.hidden = !activeIsHost;
            updateStartButton(party);
            showConventionScreen(lobbyScreen);
            lobbyStatus.textContent = "The game has stopped. The Convention is back on standby.";
            return;
        }
        if (party.status !== "playing" && party.status !== "finished") return;
        document.getElementById("point-party-code").textContent = `Convention ${activePartyCode || "----"}`;
        pointPartyStopButton.hidden = !activeIsHost || (party.status !== "playing" && party.status !== "finished");
        if (party.status === "playing" && !pointPartyLiveListenersActive) {
            startPointPartyLiveListeners(activePartyCode);
        }

        if (party.status === "playing" && state.phase === "starting") {
            if (activeIsHost) startPointPartyRound(party, 1);
            else lobbyStatus.textContent = "The host is preparing the first Point Party round…";
            return;
        }

        if (state.phase === "round" && party.status === "playing") {
            showConventionScreen(pointPartyScreen);
            updatePointPartyRoundUI(party);
            schedulePointPartyHostRoundEnd(party);
            return;
        }

        if (state.phase === "results" && party.status === "playing") {
            if (pointPartyTimerInterval) clearInterval(pointPartyTimerInterval);
            pointPartyTimerInterval = null;
            showConventionScreen(pointPartyScreen);
            pointPartyRoundDisplay.textContent = `Round ${state.roundNumber} complete`;
            pointPartyTimerDisplay.textContent = "✓";
            renderPointPartyRoundResults(party, false);
            schedulePointPartyNextRound(party);
            return;
        }

        if (state.phase === "finished" || party.status === "finished") {
            if (pointPartyTimerInterval) clearInterval(pointPartyTimerInterval);
            pointPartyTimerInterval = null;
            showConventionScreen(pointPartyScreen);
            pointPartyRoundDisplay.textContent = "Game complete";
            pointPartyTimerDisplay.textContent = "🏆";
            renderPointPartyRoundResults(party, true);
        }
    }

    async function submitPointPartyGuess() {
        if (!activePartyCode || !activeUserUid || pointPartySubmissionPending) return;
        const party = currentPartyData;
        const state = party?.gameState || {};
        if (!party || state.phase !== "round") return;
        const selectedSpecies = pointPartySelect.value;
        if (!selectedSpecies) {
            pointPartyStatus.textContent = "Please select a clownfish species first.";
            return;
        }
        const elapsedMs = Math.max(0, Math.min(
            Number(party.settings?.roundTimeSeconds || 20) * 1000,
            pointPartyNow() - Number(state.startedAt)
        ));
        if (pointPartyNow() >= Number(state.endsAt)) {
            pointPartyStatus.textContent = "Time is up — this round is closing.";
            pointPartySelect.disabled = true;
            pointPartySubmit.disabled = true;
            return;
        }

        pointPartySubmissionPending = true;
        pointPartySelect.disabled = true;
        pointPartySubmit.disabled = true;
        pointPartyStatus.textContent = "Submitting your guess…";
        try {
            await window.clownFirebase.database.ref(`parties/${activePartyCode}/guesses/${state.roundNumber}/${activeUserUid}`).set({
                species: selectedSpecies,
                elapsedMs,
                submittedAt: pointPartyNow()
            });
            pointPartyStatus.textContent = "Guess locked in! Waiting for the other players…";
        } catch (error) {
            console.error("Could not submit Point Party guess:", error);
            pointPartyStatus.textContent = error.code === "PERMISSION_DENIED"
                ? "Your guess was not accepted. The round may have ended or you may already have submitted."
                : `Could not submit your guess: ${error.message || error}`;
            pointPartySubmissionPending = false;
            pointPartySelect.disabled = false;
            pointPartySubmit.disabled = false;
        }
    }

    pointPartySubmit.addEventListener("click", submitPointPartyGuess);

    // Point Party: Spacebar and right-click both lock in the currently selected answer.
    document.addEventListener("keydown", event => {
        if (event.code !== "Space" || pointPartyScreen.hidden) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        submitPointPartyGuess();
    }, true);
    pointPartyScreen.addEventListener("contextmenu", event => {
        event.preventDefault();
        if (!pointPartyScreen.hidden) submitPointPartyGuess();
    });

    pointPartyStopButton.addEventListener("click", stopCurrentConventionGame);
    partyDuelsStopButton.addEventListener("click", stopCurrentConventionGame);
    document.getElementById("point-party-leave-button").addEventListener("click", leaveActiveConvention);
    document.getElementById("party-duels-leave").addEventListener("click", leaveActiveConvention);

    function stopPointPartyLiveListeners() {
        if (!window.clownFirebase || !activePartyCode) return;
        const database = window.clownFirebase.database;
        if (pointPartyGameStateListener) database.ref(`parties/${activePartyCode}/gameState`).off("value", pointPartyGameStateListener);
        if (pointPartyStatusListener) database.ref(`parties/${activePartyCode}/status`).off("value", pointPartyStatusListener);
        if (pointPartyGuessesListener && pointPartyGuessesListenerRound !== null) {
            database.ref(`parties/${activePartyCode}/guesses/${pointPartyGuessesListenerRound}`).off("value", pointPartyGuessesListener);
        }
        pointPartyGameStateListener = null;
        pointPartyStatusListener = null;
        pointPartyGuessesListener = null;
        pointPartyGuessesListenerRound = null;
        pointPartyLiveListenersActive = false;
    }

    function listenToPointPartyRoundGuesses(roundNumber) {
        if (!activePartyCode || !window.clownFirebase || !Number(roundNumber)) return;
        if (pointPartyGuessesListener && pointPartyGuessesListenerRound === Number(roundNumber)) return;
        const database = window.clownFirebase.database;
        if (pointPartyGuessesListener && pointPartyGuessesListenerRound !== null) {
            database.ref(`parties/${activePartyCode}/guesses/${pointPartyGuessesListenerRound}`).off("value", pointPartyGuessesListener);
        }
        pointPartyGuessesListenerRound = Number(roundNumber);
        pointPartyGuessesListener = snapshot => {
            if (!currentPartyData) return;
            if (!currentPartyData.guesses) currentPartyData.guesses = {};
            currentPartyData.guesses[roundNumber] = snapshot.val() || {};
            handlePointPartyState(currentPartyData);
        };
        database.ref(`parties/${activePartyCode}/guesses/${roundNumber}`).on("value", pointPartyGuessesListener, error => {
            console.error("Point Party guess listener failed:", error);
            pointPartyStatus.textContent = "Could not synchronise submitted guesses. Check your connection.";
        });
    }

    function startPointPartyLiveListeners(code) {
        if (pointPartyLiveListenersActive || !window.clownFirebase) return;
        pointPartyLiveListenersActive = true;
        const database = window.clownFirebase.database;

        // Once the game starts, stop listening to the entire party record.
        // The live game only needs its state, status, members and current-round guesses.
        if (partyDetailsListener) {
            database.ref(`parties/${code}`).off("value", partyDetailsListener);
            partyDetailsListener = null;
        }

        pointPartyGameStateListener = snapshot => {
            if (!currentPartyData) return;
            currentPartyData.gameState = snapshot.val() || {};
            const phase = currentPartyData.gameState.phase;
            if (phase === "round" || phase === "results") {
                listenToPointPartyRoundGuesses(currentPartyData.gameState.roundNumber);
            } else if (phase === "finished" && pointPartyGuessesListener) {
                if (pointPartyGuessesListenerRound !== null) {
                    database.ref(`parties/${code}/guesses/${pointPartyGuessesListenerRound}`).off("value", pointPartyGuessesListener);
                }
                pointPartyGuessesListener = null;
                pointPartyGuessesListenerRound = null;
            }
            handlePointPartyState(currentPartyData);
        };
        pointPartyStatusListener = snapshot => {
            if (!currentPartyData) return;
            currentPartyData.status = snapshot.val() || "waiting";
            handlePointPartyState(currentPartyData);
        };
        database.ref(`parties/${code}/gameState`).on("value", pointPartyGameStateListener, error => {
            console.error("Point Party game-state listener failed:", error);
            pointPartyStatus.textContent = "The game state could not be synchronised. Check your connection.";
        });
        database.ref(`parties/${code}/status`).on("value", pointPartyStatusListener, error => {
            console.error("Point Party status listener failed:", error);
            pointPartyStatus.textContent = "The game status could not be synchronised. Check your connection.";
        });
    }


    // ==========================================
    // PARTY DUELS — TWO-PLAYER NO MOVE BATTLE
    // The host publishes each shared fish and resolves the round using the
    // same Battle/No Move HP, healing and response-time damage formula as Cluny Court.
    // ==========================================
    const pd = {
        image: document.getElementById("party-duels-image"),
        warp: document.getElementById("party-duels-warp-layer"),
        select: document.getElementById("party-duels-species-select"),
        submit: document.getElementById("party-duels-submit"),
        status: document.getElementById("party-duels-status"),
        round: document.getElementById("party-duels-round"),
        timer: document.getElementById("party-duels-timer"),
        reveal: document.getElementById("party-duels-reveal"),
        stop: partyDuelsStopButton
    };
    let pdRenderedKey = null;
    let pdHostDeadline = null;
    let pdBlinkTimer = null;
    let pdClockInterval = null;
    let pdSubmitPending = false;
    let pdLastResolvedKey = null;
    let pdStartingRound = false;
    let pdHostTimerKey = null;
    let pdLastSoundRound = null;
    let pdLastDamageSoundRound = null;
    let pdLastBellGuessIds = new Set();
    if (pd.select && Array.isArray(species)) {
        pd.select.replaceChildren();
        species.forEach(name => { const option=document.createElement("option"); option.value=name; option.textContent=name; pd.select.appendChild(option); });
    }
    function pdName(uid, party) { return party.members?.[uid]?.name || "Player"; }
    function pdPlayers(party) { return Object.keys(party.members || {}).sort((a,b) => (party.members[a].joinedAt||0)-(party.members[b].joinedAt||0)).slice(0,2); }
    function pdTileOrder() { const a=[0,1,2,3,4,5,6,7,8]; for(let i=8;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
    function pdRenderHealth(party) {
        const ids = pdPlayers(party); const hp = party.gameState?.hp || {};
        const names = ["party-duels-player-one", "party-duels-player-two"];
        ids.forEach((uid,i)=>{
            const rawHp=Number(hp[uid]); const value=Math.max(0,Math.min(5000,Number.isFinite(rawHp)?rawHp:5000));
            document.getElementById(`${names[i]}-name`).textContent=pdName(uid,party)+(uid===activeUserUid?" (You)":"");
            document.getElementById(`${names[i]}-health`).style.width=`${value/50}%`;
            document.getElementById(`${names[i]}-hp`).textContent=`${Math.ceil(value).toLocaleString()} / 5,000 HP`;
        });
    }
    function pdRenderFish(state, challenges) {
        const image=pd.image; const warp=pd.warp;
        if (!image || !state.image) return;
        const cs=state.challengeState||{};
        image.style.transform=`rotate(${cs.upsideDown?180:0}deg)`;
        image.style.filter=[cs.morpho?"hue-rotate(180deg)":"",cs.hazelnut?"blur(3px)":""].filter(Boolean).join(" ")||"none";
        warp.hidden=!cs.warp; warp.replaceChildren();
        warp.style.filter=image.style.filter;
        warp.style.transform=image.style.transform;
        image.style.opacity=cs.warp?"0":"1";
        const finish=()=>{
            if(!image.naturalWidth || !cs.warp) return;
            (cs.tileOrder||pdTileOrder()).forEach(index=>{
                const tile=document.createElement("div"); tile.className="party-duels-warp-tile";
                const row=Math.floor(index/3), col=index%3;
                tile.style.backgroundImage=`url("${image.src}")`; tile.style.backgroundSize="300% 300%"; tile.style.backgroundPosition=`${col*50}% ${row*50}%`;
                warp.appendChild(tile);
            });
        };
        image.onload=finish; image.src=state.image; if(image.complete) finish();
        document.getElementById("party-duels-challenges").textContent=[
            challenges.blink?"Blink Mode — Clown Hide":null,
            challenges.downTheClown?"Down the Clown":null,
            challenges.clownMorpho?"Clown Morpho":null,
            challenges.clownWarp?"Clown Warp":null,
            challenges.clownHazelnut?"Clown Hazelnut":null
        ].filter(Boolean).join(" · ") || "No optional challenges";
    }
    function pdStopVisualTimers(){ if(pdHostDeadline)clearTimeout(pdHostDeadline); if(pdBlinkTimer)clearInterval(pdBlinkTimer); if(pdClockInterval)clearInterval(pdClockInterval); pdHostDeadline=null; pdBlinkTimer=null; pdClockInterval=null; }
    async function pdStartRound(roundNumber) {
        if(!activeIsHost||!activePartyCode) return;
        const ref=window.clownFirebase.database.ref(`parties/${activePartyCode}`);
        if(pdStartingRound) return;
        pdStartingRound = true;
        const snap=await ref.once("value"); const party=snap.val();
        if(!party||party.status!=="playing"||party.mode!=="duels") { pdStartingRound=false; return; }
        const players=pdPlayers(party); if(players.length!==2) { pdStartingRound=false; return; }
        const chosen=fish[Math.floor(Math.random()*fish.length)]; if(!chosen) throw new Error("Fish database is empty.");
        const c=party.settings?.challenges||{}; const now=pointPartyNow();
        const challengeState={upsideDown:c.downTheClown===true,morpho:c.clownMorpho===true,warp:c.clownWarp===true,hazelnut:c.clownHazelnut===true,tileOrder:c.clownWarp?pdTileOrder():[]};
        await ref.child("guesses").child(String(roundNumber)).remove();
        await ref.child("gameState").set({phase:"round",roundNumber,image:chosen.image,startedAt:now,endsAt:now+30000,hp:party.gameState?.hp||Object.fromEntries(players.map(uid=>[uid,5000])),multipliers:party.gameState?.multipliers||Object.fromEntries(players.map(uid=>[uid,0])),challengeState,updatedAt:now});
        pdStartingRound = false;
    }
    async function pdResolveRound(party, roundNumber) {
        if(!activeIsHost||!activePartyCode) return;
        const key=`${activePartyCode}:${roundNumber}`; if(pdLastResolvedKey===key)return; pdLastResolvedKey=key;
        try {
            const ref=window.clownFirebase.database.ref(`parties/${activePartyCode}`); const snap=await ref.once("value"); party=snap.val();
            if(!party||party.status!=="playing"||party.gameState?.phase!=="round"||Number(party.gameState.roundNumber)!==Number(roundNumber))return;
            const ids=pdPlayers(party), guesses=party.guesses?.[roundNumber]||{}, hp={...(party.gameState.hp||{})}, details={};
            const answerFish=fish.find(entry=>entry.image===party.gameState.image);
            if(!answerFish) throw new Error("The current fish image is missing from the fish database.");
            const correctIds=ids.filter(uid=>guesses[uid]?.species===answerFish.species);
            const bothCorrect=correctIds.length===2, bothWrong=correctIds.length===0;
            if(bothCorrect||bothWrong){
                const heal=bothCorrect?15:750;
                ids.forEach(uid=>{hp[uid]=Math.min(5000,(Number(hp[uid])||5000)+heal);details[uid]={correct:bothCorrect,healing:Math.min(heal,5000-(Number(party.gameState.hp?.[uid])||5000)),damage:0};});
            } else {
                const winner=correctIds[0], loser=ids.find(uid=>uid!==winner);
                const elapsed=Math.max(0,Number(guesses[winner]?.elapsedMs)||0)/1000;
                const damage=Math.max(100,Math.min(1500,1500-(2550/19.9)*(Math.max(0.1,elapsed)-0.1)));
                const rounded=Math.round(damage);
                hp[loser]=Math.max(0,(Number(hp[loser])||5000)-rounded);
                ids.forEach(uid=>details[uid]={correct:uid===winner,damage:uid===loser?rounded:0,healing:0});
            }
            const ended=ids.some(uid=>hp[uid]<=0); const nextPhase=ended?"finished":"roundResult";
            await ref.child("gameState").update({phase:nextPhase,hp,answer:answerFish.species,roundResults:details,resultsEndsAt:pointPartyNow()+4200,updatedAt:pointPartyNow(),...(ended?{winner:ids.find(uid=>hp[uid]>0)||null}: {})});
            if(ended) await ref.child("status").set("finished");
        } catch(error){ console.error("Party Duels round resolution failed:",error); pdLastResolvedKey=null; }
    }
    function pdScheduleHost(party) {
        if(!activeIsHost) return;
        const state=party.gameState||{};
        if(state.phase==="round"){
            const round=Number(state.roundNumber), ids=pdPlayers(party), guesses=party.guesses?.[round]||{};
            const key=`round:${round}:${state.startedAt}`;
            if(ids.length===2&&ids.every(uid=>guesses[uid])){
                if(pdHostDeadline) clearTimeout(pdHostDeadline);
                pdHostDeadline=null; pdHostTimerKey=null;
                pdResolveRound(party,round); return;
            }
            if(pdHostTimerKey!==key){
                if(pdHostDeadline)clearTimeout(pdHostDeadline);
                pdHostTimerKey=key;
                pdHostDeadline=setTimeout(()=>{pdHostDeadline=null;pdHostTimerKey=null;pdResolveRound(currentPartyData,round);},Math.max(0,Number(state.endsAt)-pointPartyNow())+100);
            }
        } else if(state.phase==="roundResult"){
            const key=`results:${state.roundNumber}:${state.resultsEndsAt}`;
            if(pdHostTimerKey!==key){
                if(pdHostDeadline)clearTimeout(pdHostDeadline);
                pdHostTimerKey=key;
                pdHostDeadline=setTimeout(()=>{pdHostDeadline=null;pdHostTimerKey=null;pdStartRound(Number(state.roundNumber)+1).catch(error=>{pdStartingRound=false;console.error(error);pd.status.textContent="The next duel round could not start.";});},Math.max(0,Number(state.resultsEndsAt)-pointPartyNow()));
            }
        }
    }
    async function pdSubmitGuess(){
        if(!activePartyCode||!activeUserUid||pdSubmitPending||pd.select.disabled)return;
        const party=currentPartyData, state=party?.gameState||{}; if(!party||party.mode!=="duels"||state.phase!=="round")return;
        const chosen=pd.select.value; if(!chosen){pd.status.textContent="Choose a species first.";return;}
        const elapsedMs=Math.max(0,Math.min(30000,pointPartyNow()-Number(state.startedAt)));
        pdSubmitPending=true; pd.select.disabled=true; pd.submit.disabled=true; pd.status.textContent="Guess locked in — waiting for your opponent…";
        try {
    await window.clownFirebase.database
        .ref(`parties/${activePartyCode}/guesses/${state.roundNumber}/${activeUserUid}`)
        .set({
            species: chosen,
            elapsedMs,
            submittedAt: pointPartyNow()
        });
}
        catch(error){pdSubmitPending=false;pd.select.disabled=false;pd.submit.disabled=false;pd.status.textContent=`Could not submit guess: ${error.message||error}`;}
    }
    pd.submit.addEventListener("click",pdSubmitGuess);
    document.addEventListener("keydown",event=>{if(event.code!=="Space"||partyDuelsScreen.hidden)return;event.preventDefault();event.stopImmediatePropagation();pdSubmitGuess();},true);
    partyDuelsScreen.addEventListener("contextmenu",event=>{event.preventDefault();if(!partyDuelsScreen.hidden)pdSubmitGuess();});
    function handlePartyDuelsState(party){
        if(!party||party.mode!=="duels")return;
        const state=party.gameState||{}; const challenges=party.settings?.challenges||{};
        // Fade evolving music out while Party Duels is active.
if (
    party.status === "playing" &&
    ["starting", "round", "roundResult"].includes(state.phase)
) {
    fadeOutMusicForPartyDuels();
}

// Restore evolving music when Party Duels ends or returns to the lobby.
if (
    party.status === "finished" ||
    (party.status === "waiting" && state.phase === "lobby")
) {
    fadeInMusicAfterPartyDuels();
}
        if(party.status==="waiting"&&state.phase==="lobby"){
            stopPartyDuelsMusic();
            pdStopVisualTimers(); pdRenderedKey=null; pdSubmitPending=false; pdLastResolvedKey=null; pdStartingRound=false; pdHostTimerKey=null; pdLastSoundRound=null; pdLastDamageSoundRound=null; pdLastBellGuessIds.clear(); pd.select.disabled=false;pd.submit.disabled=false;pd.stop.hidden=true;
            showConventionScreen(lobbyScreen); return;
        }
        if(party.status!=="playing"&&party.status!=="finished")return;
        document.getElementById("party-duels-code").textContent=`Convention ${activePartyCode||"----"} · No Move`;
        pd.stop.hidden=!activeIsHost;
        pdRenderHealth(party);
        if(state.phase==="starting"){
            startPartyDuelsMusic();
            showConventionScreen(partyDuelsScreen);
            if(activeIsHost) pdStartRound(1).catch(e=>{pdStartingRound=false;console.error(e);pd.status.textContent="The host could not start the duel.";});
            return;
        }
        if(state.phase==="round"){
            startPartyDuelsMusic();
            showConventionScreen(partyDuelsScreen);
            const roundGuesses = party.guesses?.[state.roundNumber] || {};

Object.keys(roundGuesses).forEach(uid => {
    const bellKey = `${state.roundNumber}:${uid}`;

    if (!pdLastBellGuessIds.has(bellKey)) {
        pdLastBellGuessIds.add(bellKey);

        if (typeof playDuelBell === "function") {
            playDuelBell();
        }
    }
});
            const key=`${state.roundNumber}:${state.startedAt}`;
            if(pdRenderedKey!==key){
                pdRenderedKey=key;pdSubmitPending=false;pd.select.value=species[0]||"";pd.select.disabled=false;pd.submit.disabled=false;pd.reveal.textContent="";
                pd.round.textContent=`Round ${state.roundNumber}`;pdRenderFish(state,challenges);pdStopVisualTimers();
                pdClockInterval=setInterval(()=>{const left=Math.max(0,Number(state.endsAt)-pointPartyNow());pd.timer.textContent=`${(left/1000).toFixed(1)}s`;if(left<=0){pd.select.disabled=true;pd.submit.disabled=true;}},100);
                if(challenges.blink){pdBlinkTimer=setInterval(()=>{const visible=(pointPartyNow()-Number(state.startedAt))%900<450;pd.image.style.visibility=visible?"visible":"hidden";pd.warp.style.visibility=visible?"visible":"hidden";},80);}else{pd.image.style.visibility="visible";pd.warp.style.visibility="visible";}
            }
            const myGuess=party.guesses?.[state.roundNumber]?.[activeUserUid];
            if(myGuess){pd.select.disabled=true;pd.submit.disabled=true;pd.status.textContent="Your guess is locked in. Waiting for the other player…";}
            else pd.status.textContent="Identify the clownfish! You have 30 seconds.";
            pdScheduleHost(party); return;
        }
        if(state.phase==="roundResult"){
            startPartyDuelsMusic();
            pdStopVisualTimers();showConventionScreen(partyDuelsScreen);pdRenderHealth(party);
            const ids=pdPlayers(party), results=state.roundResults||{};
            if(pdLastDamageSoundRound!==Number(state.roundNumber)&&ids.some(uid=>(results[uid]?.damage||0)>0)){pdLastDamageSoundRound=Number(state.roundNumber);if(typeof playDuelHealthLossSound==="function")playDuelHealthLossSound();}
            pd.reveal.textContent=`The Clown was: ${state.answer}. `+ids.map(uid=>`${pdName(uid,party)}: ${results[uid]?.correct?"Correct":"Incorrect"}${results[uid]?.damage?` · −${results[uid].damage.toLocaleString()} HP`:""}${results[uid]?.healing?` · +${results[uid].healing} HP`:""}`).join(" | ");
            pd.status.textContent="Next round starting shortly…";
            pdScheduleHost(party);
            return;
        }
        if(state.phase==="finished"||party.status==="finished"){
            stopPartyDuelsMusic();
            pdStopVisualTimers();showConventionScreen(partyDuelsScreen);pdRenderHealth(party);
            const winner=state.winner;pd.round.textContent="Duel finished";pd.status.textContent=winner?`${pdName(winner,party)} wins the No Move duel!`:"The duel has ended.";
            pd.reveal.textContent=`Final answer: ${state.answer||"—"}`;pd.select.disabled=true;pd.submit.disabled=true;
        }
    }

    function renderConventionSettings(party) {
        if (!party) return;
        currentPartyData = party;
        const settings = party.settings || {};
        const challenges = settings.challenges || {};
        const challengeNames = {
            blink: "Blink Mode — Clown Hide",
            downTheClown: "Down the Clown",
            clownMorpho: "Clown Morpho",
            clownWarp: "Clown Warp",
            clownHazelnut: "Clown Hazelnut"
        };
        const enabledChallenges = Object.entries(challenges)
            .filter(([, enabled]) => enabled === true)
            .map(([key]) => challengeNames[key] || key);

        const lines = [];
        if (party.mode === "duels") {
            lines.push("<strong>Game mode:</strong> Party Duels");
            lines.push("<strong>Players:</strong> 2 (one versus one)");
            lines.push("<strong>Rules:</strong> No Move — 5,000 HP per player");
        } else {
            lines.push("<strong>Game mode:</strong> Point Party");
            lines.push(`<strong>Rounds:</strong> ${Number(settings.rounds) || "—"}`);
            lines.push(`<strong>Time per round:</strong> ${Number(settings.roundTimeSeconds) || "—"} seconds`);
            lines.push(`<strong>Point Boost:</strong> ${settings.pointBoost ? "Enabled" : "Disabled"}`);
        }

        const challengesText = enabledChallenges.length
            ? enabledChallenges.join(", ")
            : "None";
        lines.push(`<strong>Optional challenges:</strong> ${challengesText}`);
        lobbySettingsDetails.replaceChildren();
        lines.forEach(line => {
            const p = document.createElement("p");
            p.innerHTML = line;
            lobbySettingsDetails.appendChild(p);
        });

        document.getElementById("convention-lobby-mode").textContent =
            party.mode === "duels" ? "Party Duels" : "Point Party";
        renderSettingsEditor(party);
        updateStartButton(party);
        handlePointPartyState(party);
        handlePartyDuelsState(party);
        if (party.status === "playing" || party.gameState?.phase === "starting") {
            lobbyStatus.textContent = "The host has started the Convention. The shared game-start signal has been received.";
            startGameButton.hidden = true;
        } else if (party.status === "finished") {
            lobbyStatus.textContent = "This Convention has finished.";
        }
    }

    function readConventionEditorSettings() {
        if (currentPartyData?.mode === "pointParty") {
            return {
                maxPlayers: null,
                rounds: Number(document.getElementById("lobby-convention-rounds").value),
                roundTimeSeconds: Number(document.getElementById("lobby-convention-round-time").value),
                pointBoost: document.getElementById("lobby-convention-point-boost").checked,
                challenges: {
                    blink: document.getElementById("lobby-point-blink").checked,
                    downTheClown: document.getElementById("lobby-point-down-clown").checked,
                    clownMorpho: document.getElementById("lobby-point-morpho").checked,
                    clownWarp: document.getElementById("lobby-point-warp").checked,
                    clownHazelnut: document.getElementById("lobby-point-hazelnut").checked
                }
            };
        }
        return {
            maxPlayers: 2,
            challenges: {
                blink: document.getElementById("lobby-duels-blink").checked,
                downTheClown: document.getElementById("lobby-duels-down-clown").checked,
                clownMorpho: document.getElementById("lobby-duels-morpho").checked,
                clownWarp: document.getElementById("lobby-duels-warp").checked,
                clownHazelnut: document.getElementById("lobby-duels-hazelnut").checked
            }
        };
    }

    function normalizedConventionSettings(settings, mode) {
        const c = settings?.challenges || {};
        if (mode === "pointParty") return {
            maxPlayers: null,
            rounds: Number(settings?.rounds) || 10,
            roundTimeSeconds: Number(settings?.roundTimeSeconds) || 20,
            pointBoost: settings?.pointBoost === true,
            challenges: {
                blink: c.blink === true, downTheClown: c.downTheClown === true,
                clownMorpho: c.clownMorpho === true, clownWarp: c.clownWarp === true,
                clownHazelnut: c.clownHazelnut === true
            }
        };
        return {
            maxPlayers: 2,
            challenges: {
                blink: c.blink === true, downTheClown: c.downTheClown === true,
                clownMorpho: c.clownMorpho === true, clownWarp: c.clownWarp === true,
                clownHazelnut: c.clownHazelnut === true
            }
        };
    }

    function updateConventionSettingsSaveButton() {
        const button = document.getElementById("save-convention-settings-button");
        if (!button || !currentPartyData || !activeIsHost || currentPartyData.status !== "waiting") {
            if (button) button.hidden = true;
            return;
        }
        const edited = JSON.stringify(readConventionEditorSettings()) !==
            JSON.stringify(normalizedConventionSettings(currentPartyData.settings, currentPartyData.mode));
        button.hidden = !edited;
        if (!edited) document.getElementById("convention-settings-save-status").textContent = "";
    }

    function renderSettingsEditor(party) {
        settingsEditor.hidden = !activeIsHost || !activePartyCode || party.status !== "waiting";
        const button = document.getElementById("save-convention-settings-button");
        if (!activeIsHost || !party) {
            if (button) button.hidden = true;
            return;
        }
        const isNewParty = settingsEditor.dataset.partyCode !== activePartyCode;
        const alreadyEdited = !isNewParty && button && !button.hidden;
        const pointParty = party.mode === "pointParty";
        document.getElementById("lobby-point-party-editor").hidden = !pointParty;
        document.getElementById("lobby-duels-editor").hidden = pointParty;
        currentPartyData = party;

        // Keep in-progress edits intact, but refresh the editor from Firebase
        // whenever no local edits are pending (including updates from another device).
        if (!alreadyEdited) {
            settingsEditor.dataset.partyCode = activePartyCode;
            const settings = party.settings || {};
            const challenges = settings.challenges || {};
            if (pointParty) {
                document.getElementById("lobby-convention-rounds").value = Number(settings.rounds) || 10;
                document.getElementById("lobby-convention-round-time").value = Number(settings.roundTimeSeconds) || 20;
                document.getElementById("lobby-convention-point-boost").checked = settings.pointBoost === true;
                document.getElementById("lobby-point-blink").checked = challenges.blink === true;
                document.getElementById("lobby-point-down-clown").checked = challenges.downTheClown === true;
                document.getElementById("lobby-point-morpho").checked = challenges.clownMorpho === true;
                document.getElementById("lobby-point-warp").checked = challenges.clownWarp === true;
                document.getElementById("lobby-point-hazelnut").checked = challenges.clownHazelnut === true;
            } else {
                document.getElementById("lobby-duels-blink").checked = challenges.blink === true;
                document.getElementById("lobby-duels-down-clown").checked = challenges.downTheClown === true;
                document.getElementById("lobby-duels-morpho").checked = challenges.clownMorpho === true;
                document.getElementById("lobby-duels-warp").checked = challenges.clownWarp === true;
                document.getElementById("lobby-duels-hazelnut").checked = challenges.clownHazelnut === true;
            }
        }
        updateConventionSettingsSaveButton();
    }

    async function saveConventionSettings() {
        if (!activeIsHost || !activePartyCode || !currentPartyData || currentPartyData.status !== "waiting") return;
        const status = document.getElementById("convention-settings-save-status");
        const button = document.getElementById("save-convention-settings-button");
        const settings = readConventionEditorSettings();
        if (currentPartyData.mode === "pointParty") {
            if (!Number.isInteger(settings.rounds) || settings.rounds < 5 || settings.rounds > 25) { status.textContent = "Choose between 5 and 25 rounds."; return; }
            if (!Number.isInteger(settings.roundTimeSeconds) || settings.roundTimeSeconds < 10 || settings.roundTimeSeconds > 45) { status.textContent = "Choose between 10 and 45 seconds per round."; return; }
        }
        button.disabled = true;
        status.textContent = "Saving settings…";
        try {
            await window.clownFirebase.database.ref(`parties/${activePartyCode}/settings`).set(settings);
            currentPartyData.settings = settings;
            status.textContent = "Convention settings saved.";
            button.hidden = true;
        } catch (error) {
            console.error("Could not save Convention settings:", error);
            status.textContent = error.code === "PERMISSION_DENIED" ? "Firebase denied this settings update. Make sure the host settings rule is published." : `Could not save settings: ${error.message || error}`;
        } finally { button.disabled = false; updateConventionSettingsSaveButton(); }
    }

    [
        "lobby-convention-rounds", "lobby-convention-round-time", "lobby-convention-point-boost",
        "lobby-point-blink", "lobby-point-down-clown", "lobby-point-morpho", "lobby-point-warp", "lobby-point-hazelnut",
        "lobby-duels-blink", "lobby-duels-down-clown", "lobby-duels-morpho", "lobby-duels-warp", "lobby-duels-hazelnut"
    ].forEach(id => {
        const control = document.getElementById(id);
        if (control) control.addEventListener("input", updateConventionSettingsSaveButton);
        if (control) control.addEventListener("change", updateConventionSettingsSaveButton);
    });
    document.getElementById("save-convention-settings-button").addEventListener("click", saveConventionSettings);

    async function stopCurrentConventionGame() {
        if (!activeIsHost || !activePartyCode || !currentPartyData) return;
        const button = currentPartyData.mode === "duels" ? partyDuelsStopButton : pointPartyStopButton;
        button.disabled = true;
        button.textContent = "Stopping…";
        clearPointPartyTimers();
        pdStopVisualTimers();
        if (pdHostDeadline) { clearTimeout(pdHostDeadline); pdHostDeadline = null; }
        try {
            const database = window.clownFirebase.database;
            await database.ref(`parties/${activePartyCode}/status`).set("waiting");
            const freshMembersSnapshot = await database.ref(`parties/${activePartyCode}/members`).once("value");
            const scoreResets = {};
            Object.keys(freshMembersSnapshot.val() || {}).forEach(uid => { scoreResets[`${uid}/score`] = 0; });
            if (Object.keys(scoreResets).length) await database.ref(`parties/${activePartyCode}/members`).update(scoreResets);
            await database.ref(`parties/${activePartyCode}/guesses`).remove();
            await database.ref(`parties/${activePartyCode}/gameState`).set({
                phase: "lobby", roundNumber: 0, updatedAt: pointPartyNow(), stoppedBy: activeUserUid
            });
            pointPartyStopButton.hidden = true;
            partyDuelsStopButton.hidden = true;
            button.disabled = false;
            button.textContent = "Stop Game and Return to Lobby";
            showConventionScreen(lobbyScreen);
            lobbyStatus.textContent = "The game has stopped. The Convention is back on standby.";
        } catch (error) {
            console.error("Could not stop Convention game:", error);
            (currentPartyData.mode === "duels" ? pd.status : pointPartyStatus).textContent = `Could not stop the game: ${error.message || error}`;
            button.disabled = false;
            button.textContent = "Stop Game and Return to Lobby";
        }
    }

    async function leaveActiveConvention() {
        if (!activePartyCode || !activeUserUid) { showConventionScreen(menuScreen); return; }
        const code = activePartyCode;
        const uid = activeUserUid;
        const wasHost = activeIsHost;
        try {
            const database = window.clownFirebase.database;
            if (wasHost) {
                await database.ref(`parties/${code}`).remove();
            } else {
                await database.ref(`parties/${code}/members/${uid}`).remove();
            }
        } catch (error) {
            console.error("Could not leave Convention:", error);
            const message = `Could not leave the Convention: ${error.message || error}. Check that the updated Firebase rules have been published.`;
            if (!pointPartyScreen.hidden) pointPartyStatus.textContent = message;
            else lobbyStatus.textContent = message;
            return;
        }
        stopPartyListeners();
        pdStopVisualTimers();
        pdLastResolvedKey = null;
        pdStartingRound = false;
        pdHostTimerKey = null;
        activePartyCode = null;
        activeUserUid = null;
        activeIsHost = false;
        currentPartyData = null;
        pointPartyRenderedRoundKey = null;
        pointPartyEndingRoundKey = null;
        pointPartySubmissionPending = false;
        startGameButton.hidden = true;
        pointPartyStopButton.hidden = true;
        partyDuelsStopButton.hidden = true;
        settingsEditor.hidden = true;
        requestsSection.hidden = true;
        showConventionScreen(menuScreen);
    }

    function updateStartButton(party = currentPartyData) {
        if (!startGameButton) return;
        startGameButton.hidden = !activeIsHost || !activePartyCode;
        if (!activeIsHost || !party) return;
        const count = Object.keys(party.members || {}).length;
        const enoughPlayers = count >= 2;
        const correctDuelsCount = party.mode !== "duels" || count === 2;
        const waiting = party.status === "waiting";
        startGameButton.disabled = !(waiting && enoughPlayers && correctDuelsCount);
        startGameButton.textContent = party.status === "playing" ? "Game Started" : "Start Game";
    }

    function startPartyDetailsListener(code) {
        const database = window.clownFirebase.database;
        if (partyDetailsListener) database.ref(`parties/${code}`).off("value", partyDetailsListener);
        partyDetailsListener = snapshot => {
            const party = snapshot.val();
            if (!party) {
                lobbyStatus.textContent = "This Convention no longer exists.";
                startGameButton.hidden = true;
                return;
            }
            renderConventionSettings(party);
            if (party.status === "waiting" && party.gameState?.phase === "lobby") {
                clearPointPartyTimers();
                pointPartyStopButton.hidden = true;
                showConventionScreen(lobbyScreen);
                if (party.gameState?.stoppedBy) lobbyStatus.textContent = "The host stopped the game. The Convention is back on standby.";
            }
        };
        database.ref(`parties/${code}`).on("value", partyDetailsListener, error => {
            console.error("Convention details listener failed:", error);
            lobbyStatus.textContent = "Could not load the Convention settings.";
        });
    }

    function startMembersListener(code) {
        const database = window.clownFirebase.database;
        if (membersListener) database.ref(`parties/${code}/members`).off("value", membersListener);
        membersListener = snapshot => {
            if (!snapshot.exists()) {
                showPlayers({});
                if (activePartyCode === code && !activeIsHost) {
                    stopPartyListeners();
                    activePartyCode = null; activeUserUid = null; currentPartyData = null;
                    showConventionScreen(menuScreen);
                }
                return;
            }
            const members = snapshot.val() || {};
            showPlayers(members);
            if (currentPartyData) {
                currentPartyData.members = members;
                updateStartButton(currentPartyData);
                if (pointPartyLiveListenersActive) handlePointPartyState(currentPartyData);
            }
        };
        database.ref(`parties/${code}/members`).on("value", membersListener, error => {
            console.error("Convention member-list listener failed:", error);
            lobbyStatus.textContent = "The live player list could not be updated.";
        });
    }

    function renderJoinRequests(requests) {
        requestList.replaceChildren();
        const entries = Object.entries(requests || {});
        requestsSection.hidden = !activeIsHost || entries.length === 0;
        if (!activeIsHost || !entries.length) return;

        entries.forEach(([uid, request]) => {
            const item = document.createElement("li");
            item.className = "convention-request-item";
            const label = document.createElement("span");
            label.textContent = request.name || "Unnamed player";
            item.appendChild(label);

            const actions = document.createElement("div");
            actions.className = "convention-request-actions";
            const approve = document.createElement("button");
            approve.type = "button";
            approve.textContent = "Approve";
            approve.addEventListener("click", () => approveJoinRequest(uid, request, approve));
            const reject = document.createElement("button");
            reject.type = "button";
            reject.textContent = "Reject";
            reject.addEventListener("click", () => rejectJoinRequest(uid, reject));
            actions.append(approve, reject);
            item.appendChild(actions);
            requestList.appendChild(item);
        });
    }

    async function approveJoinRequest(uid, request, button) {
        if (!activePartyCode || !activeIsHost) return;
        button.disabled = true;
        try {
            const database = window.clownFirebase.database;
            const partyRef = database.ref(`parties/${activePartyCode}`);
            const snapshot = await partyRef.once("value");
            const party = snapshot.val();
            if (!party || party.status !== "waiting") throw new Error("This Convention is no longer accepting players.");
            const members = party.members || {};
            if (members[uid]) {
                await database.ref(`joinRequests/${activePartyCode}/${uid}`).remove();
                return;
            }
            if (party.mode === "duels" && Object.keys(members).length >= 2) {
                throw new Error("Party Duels already has its two players.");
            }
            const playerName = String(request.name || "").trim().slice(0, 17);
            if (!playerName) throw new Error("This join request has no valid display name.");
            await database.ref(`parties/${activePartyCode}/members/${uid}`).set({
                name: playerName,
                nameColour: assignRandomNameColour(),
                role: "player",
                joinedAt: Date.now(),
                score: 0
            });
            await database.ref(`joinRequests/${activePartyCode}/${uid}`).remove();
            lobbyStatus.textContent = `${playerName} joined the Convention.`;
        } catch (error) {
            console.error("Could not approve Convention join request:", error);
            lobbyStatus.textContent = error.code === "PERMISSION_DENIED"
                ? "Firebase denied approval. Check the published database rules."
                : (error.message || "Could not approve this request.");
            button.disabled = false;
        }
    }

    async function rejectJoinRequest(uid, button) {
        if (!activePartyCode || !activeIsHost) return;
        button.disabled = true;
        try {
            await window.clownFirebase.database.ref(`joinRequests/${activePartyCode}/${uid}`).remove();
        } catch (error) {
            console.error("Could not reject Convention join request:", error);
            lobbyStatus.textContent = "Could not reject this request. Please try again.";
            button.disabled = false;
        }
    }

    function watchHostRequests(code) {
        const database = window.clownFirebase.database;
        if (requestsListener) database.ref(`joinRequests/${code}`).off("value", requestsListener);
        requestsSection.hidden = true;
        requestsListener = snapshot => renderJoinRequests(snapshot.val() || {});
        database.ref(`joinRequests/${code}`).on("value", requestsListener, error => {
            console.error("Convention join-request listener failed:", error);
            lobbyStatus.textContent = "Could not load join requests. Check the database rules.";
        });
    }

    function enterJoinedLobby(code, member) {
        stopPartyListeners();
        activePartyCode = code;
        activeIsHost = false;
        activeUserUid = window.clownFirebase.auth.currentUser.uid;
        currentPartyData = null;
        document.getElementById("convention-code-display").textContent = code;
        lobbyStatus.textContent = `Welcome, ${member.name}! Loading Convention settings…`;
        requestsSection.hidden = true;
        startGameButton.hidden = true;
        startMembersListener(code);
        startPartyDetailsListener(code);
        showConventionScreen(lobbyScreen);
    }

    async function requestToJoinConvention() {
        const button = document.getElementById("confirm-join-convention-button");
        const code = document.getElementById("convention-join-code").value.trim().toUpperCase();
        const name = document.getElementById("convention-join-name").value.trim();
        joinStatus.textContent = "";
        if (!/^[A-Z]{4}$/.test(code)) { joinStatus.textContent = "Please enter a valid four-letter Convention code."; return; }
        if (!name || name.length > 17) { joinStatus.textContent = "Please enter a display name between 1 and 17 characters."; return; }
        button.disabled = true;
        button.textContent = "Joining…";
        try {
            const user = await window.clownFirebaseReady;
            if (!user) throw new Error("Firebase sign-in has not completed. Please refresh and try again.");
            stopPartyListeners();
            activePartyCode = code;
            activeUserUid = user.uid;
            activeIsHost = false;
            const database = window.clownFirebase.database;
            const member = {
                name,
                nameColour: assignRandomNameColour(),
                role: "player",
                joinedAt: Date.now(),
                score: 0
            };
            await database.ref(`parties/${code}/members/${user.uid}`).set(member);
            enterJoinedLobby(code, member);
        } catch (error) {
            console.error("Could not join Convention:", error);
            joinStatus.textContent = error.code === "PERMISSION_DENIED"
                ? "Could not join. Check the four-letter code, make sure the Convention is waiting for players, and check that it has space."
                : `Could not join the Convention: ${error.message || error}`;
            stopPartyListeners();
            activePartyCode = null; activeUserUid = null; activeIsHost = false;
            button.disabled = false;
            button.textContent = "Join Convention";
        } finally {
            if (activePartyCode === code) { button.disabled = false; button.textContent = "Join Convention"; }
        }
    }

    async function createConvention() {
        const button = document.getElementById("confirm-create-convention-button");
        const name = document.getElementById("convention-host-name").value.trim();
        const mode = selectedMode();

        createStatus.textContent = "";
        if (!name || name.length > 17) {
            createStatus.textContent = "Please enter a display name between 1 and 17 characters.";
            return;
        }

        let settings;
        if (mode === "pointParty") {
            const rounds = Number(document.getElementById("convention-rounds").value);
            const roundTimeSeconds = Number(document.getElementById("convention-round-time").value);
            if (!Number.isInteger(rounds) || rounds < 5 || rounds > 25) {
                createStatus.textContent = "Choose between 5 and 25 rounds.";
                return;
            }
            if (!Number.isInteger(roundTimeSeconds) || roundTimeSeconds < 10 || roundTimeSeconds > 45) {
                createStatus.textContent = "Choose between 10 and 45 seconds per round.";
                return;
            }
            settings = {
                maxPlayers: null,
                rounds,
                roundTimeSeconds,
                pointBoost: document.getElementById("convention-point-boost").checked,
                challenges: {
                    blink: document.getElementById("convention-point-blink").checked,
                    downTheClown: document.getElementById("convention-point-down-clown").checked,
                    clownMorpho: document.getElementById("convention-point-morpho").checked,
                    clownWarp: document.getElementById("convention-point-warp").checked,
                    clownHazelnut: document.getElementById("convention-point-hazelnut").checked
                }
            };
        } else {
            settings = {
                maxPlayers: 2,
                challenges: {
                    blink: document.getElementById("convention-duels-blink").checked,
                    downTheClown: document.getElementById("convention-down-clown").checked,
                    clownMorpho: document.getElementById("convention-morpho").checked,
                    clownWarp: document.getElementById("convention-warp").checked,
                    clownHazelnut: document.getElementById("convention-hazelnut").checked
                }
            };
        }

        button.disabled = true;
        button.textContent = "Creating…";
        createStatus.textContent = "Connecting to Firebase…";

        try {
            const user = await window.clownFirebaseReady;
            if (!user) throw new Error("Firebase sign-in has not completed. Please refresh and try again.");

            const database = window.clownFirebase.database;
            const timestamp = Date.now();
            const partyData = {
                hostUid: user.uid,
                mode,
                status: "waiting",
                createdAt: timestamp,
                settings,
                members: {
                    [user.uid]: {
                        name,
                        nameColour: assignRandomNameColour(),
                        role: "host",
                        joinedAt: timestamp,
                        score: 0
                    }
                },
                gameState: { phase: "lobby", roundNumber: 0, updatedAt: timestamp }
            };

            let createdCode = null;
            let lastError = null;
            for (let attempt = 0; attempt < 8; attempt++) {
                const candidate = makePartyCode();
                try {
                    await database.ref(`parties/${candidate}`).set(partyData);
                    createdCode = candidate;
                    break;
                } catch (error) {
                    lastError = error;
                    if (error.code !== "PERMISSION_DENIED" && error.code !== "PERMISSION_DENIED: Permission denied") throw error;
                }
            }

            if (!createdCode) {
                throw lastError || new Error("Could not create a unique party code. Please try again.");
            }

            stopPartyListeners();
            activePartyCode = createdCode;
            activeUserUid = user.uid;
            activeIsHost = true;
            currentPartyData = partyData;
            document.getElementById("convention-code-display").textContent = createdCode;
            lobbyStatus.textContent = "Your Convention is ready. Share the code so friends can join.";
            showPlayers(partyData.members);

            startMembersListener(createdCode);
            startPartyDetailsListener(createdCode);

            console.log("Clown Convention created successfully:", createdCode);
            showConventionScreen(lobbyScreen);
        } catch (error) {
            console.error("Could not create Clown Convention:", error);
            createStatus.textContent = error.code === "PERMISSION_DENIED"
                ? "Firebase denied party creation. Check that the published database rules match our setup."
                : `Could not create the Convention: ${error.message || error}`;
        } finally {
            button.disabled = false;
            button.textContent = "Create Convention";
        }
    }

    document.getElementById("clown-convention-button").addEventListener("click", async () => {
    try {
        await ensureFirebaseReady();
        attachPointPartyServerTimeListener();
        showConventionScreen(menuScreen);
    } catch (error) {
        alert("Clown Convention requires an internet connection. Please reconnect and try again.");
        console.error("Convention connection failed:", error);
    }
});

    document.getElementById("create-convention-button").addEventListener("click", () => {
        createStatus.textContent = "";
        updateModeSettings();
        showConventionScreen(createScreen);
    });

    document.getElementById("join-convention-button").addEventListener("click", () => {
        joinStatus.textContent = "";
        document.getElementById("convention-join-code").value = "";
        document.getElementById("convention-join-name").value = "";
        showConventionScreen(joinScreen);
    });

    document.getElementById("confirm-join-convention-button").addEventListener("click", requestToJoinConvention);

    document.getElementById("convention-join-code").addEventListener("input", event => {
        event.target.value = event.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4);
    });

    document.querySelectorAll('input[name="convention-mode"]').forEach(radio => {
        radio.addEventListener("change", updateModeSettings);
    });

    document.getElementById("confirm-create-convention-button").addEventListener("click", createConvention);

    document.querySelectorAll(".convention-back-button").forEach(button => {
        button.addEventListener("click", () => {
            if (button.closest("#convention-create-screen") || button.closest("#convention-join-screen")) showConventionScreen(menuScreen);
            else showConventionScreen(homeScreen);
        });
    });

    startGameButton.addEventListener("click", async () => {
        if (!activePartyCode || !activeIsHost || !currentPartyData) return;
        const members = currentPartyData.members || {};
        const playerCount = Object.keys(members).length;
        if (playerCount < 2) {
            lobbyStatus.textContent = "At least two players must join before the game can start.";
            return;
        }
        if (currentPartyData.mode === "duels" && playerCount !== 2) {
            lobbyStatus.textContent = "Party Duels requires exactly two players.";
            return;
        }
        if (currentPartyData.status !== "waiting") return;

        startGameButton.disabled = true;
        startGameButton.textContent = "Starting…";
        lobbyStatus.textContent = "Sending the start signal to everyone…";
        try {
            const database = window.clownFirebase.database;
            const now = Date.now();
            const initialGameState = currentPartyData.mode === "duels"
                ? { phase: "starting", roundNumber: 0, startedAt: now, startedBy: activeUserUid, hp: Object.fromEntries(Object.keys(members).map(uid => [uid, 5000])), multipliers: Object.fromEntries(Object.keys(members).map(uid => [uid, 0])), updatedAt: now }
                : { phase: "starting", roundNumber: 0, startedAt: now, startedBy: activeUserUid, updatedAt: now };
            await database.ref(`parties/${activePartyCode}/gameState`).update(initialGameState);
            await database.ref(`parties/${activePartyCode}/status`).set("playing");
        } catch (error) {
            console.error("Could not start Clown Convention:", error);
            lobbyStatus.textContent = error.code === "PERMISSION_DENIED"
                ? "Firebase denied the start signal. Check that the published rules allow the host to update gameState and status."
                : `Could not start the Convention: ${error.message || error}`;
            startGameButton.disabled = false;
            startGameButton.textContent = "Start Game";
        }
    });

    document.getElementById("leave-convention-button").addEventListener("click", leaveActiveConvention);
})();
