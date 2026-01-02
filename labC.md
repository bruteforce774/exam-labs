# Lab C – Vue + Pinia: Asynkron data, Router og testbarhet

> **Formål**  
> Denne laben bygger videre på Lab A og B og repeterer de siste viktige bitene før obligatorisk oppgave:  
> **asynkron dataflyt, routing og testbar store-logikk**.

Dette er et **arbeidsdokument**:
- marker spørsmål
- skriv notater
- stopp når du møter friksjon – det er der læringen ligger

---

## 🎯 Læringsmål for lab C

Etter denne laben skal du kunne:
- Hente data asynkront med `fetch()` i en Pinia action
- Kalle actionen fra `onMounted()` i én container/view
- Bruke Vue Router med minst:
  - liste-side (`/`)
  - detalj-side (`/item/:id`)
  - "kurv"-side (`/cart`)
- Holde store-en testbar, og skrive 2–3 enhetstester for getters/actions

---

## 0️⃣ Forberedelse

Bruk prosjektet fra Lab B.

Hvis du startet på nytt:
- sørg for at du har Pinia og en fungerende store

---

## 1️⃣ Asynkron data (uten å gjøre det for komplisert)

### 1.1 Lag en JSON-fil

Opprett:

```txt
public/items.json
```

Innholdet skal være en liste av objekter som matcher typen din.  
Hold den liten (3–6 elementer).

Noter her:
- hvilke felter har objektene dine?

---

### 1.2 State for data

I store-en:
- legg til state for:
  - `items` (listen fra JSON)
  - `isLoading: boolean`
  - `errorMessage: string | null`

**Refleksjon:**
- Hvorfor er `isLoading` og `errorMessage` *applikasjonstilstand*?

---

### 1.3 Action: loadItems

Lag en action:
- `loadItems()`

Den skal:
- sette `isLoading = true`
- forsøke å `fetch('/items.json')`
- parse JSON
- legge data i state
- håndtere feil
- sette `isLoading = false` til slutt

> 💡 Ikke overtenk feilhåndtering. Men unngå silent fail.

---

### 1.4 Kall action fra en container

I container/view-komponenten:
- bruk `onMounted()`
- kall `store.loadItems()`

**Sjekkpunkt:**
- Får du data på skjermen?
- Ser du riktig state ved loading?

Noter her hvis noe er uklart 👇

---

## 2️⃣ Routing

### 2.1 Installer Vue Router

```bash
npm install vue-router
```

---

### 2.2 Opprett router

Opprett:

```txt
src/router/index.ts
```

Legg inn routes:
- `/` → en liste-view
- `/item/:id` → en detalj-view
- `/cart` → en "kurv"-view

> 💡 View-komponenter kan ligge i `src/views/`.

---

### 2.3 Koble router til appen

I `main.ts`:
- registrer router

I `App.vue`:
- bruk `<router-view />`

---

### 2.4 Navigasjon

Lag en enkel nav-komponent (presentasjon):

```txt
src/components/NavBar.vue
```

Den skal:
- bruke `<router-link>`
- vise antall i kurv via props

**Regel:**
- NavBar skal ikke kjenne store

---

## 3️⃣ Detaljvisning

### 3.1 Finn element basert på route param

I detalj-viewen:
- hent `id` fra route params
- finn riktig element fra data-listen

Du kan gjøre dette ved:
- en getter i store: `getItemById(id)`
  - eller en computed i view som bruker store-state

**Viktig:**
- ikke gjør komplisert logikk i view

---

### 3.2 Handling på detaljsiden

Legg inn en knapp:
- "Legg til" eller "Øk antall"

Knappen skal:
- emitte event (hvis detaljkomponenten er presentasjon)
- eller kalle action via container

Hold deg til prinsippet:
- *én komponent kjenner store*

---

## 4️⃣ Testbarhet: Vitest

### 4.1 Installer Vitest (hvis ikke allerede)

I et Vite Vue TS-prosjekt er Vitest ofte i bruk som anbefalt. Hvis ikke:

```bash
npm install -D vitest jsdom @vue/test-utils
```

(Det holder for store-tester å bruke Vitest + Pinia, men dette er et ok standard-sett.)

---

### 4.2 Testfil

Opprett:

```txt
src/stores/yourStore.test.ts
```

---

### 4.3 Skriv 3 tester

Testene skal sjekke:
1. En getter som teller antall
2. En getter som beregner total
3. En action som oppdaterer quantity

**Tips:**
- Lag testdata manuelt i testen
- Ikke bruk fetch i enhetstestene

Noter her:
- hvilke tre tester valgte du?

---

## 5️⃣ Refleksjon

Svar med stikkord:

- Hvorfor er det lurt at fetch ligger i en action?
- Hvorfor er det lurt at getters gjør beregningene?
- Hva må til for at en store er lett å teste?

---

## ✅ Ferdig når

Du har:
- router med 3 ruter
- asynkron fetch inn i store
- onMounted som trigger lasting
- tre tester av store-logikk
- fortsatt tydelig container/presentasjon-splitt

---

## 🧩 Ekstra (valgfritt)

Hvis du har tid:
- legg inn en enkel “not found”-route
- legg inn `errorMessage`-visning i view
- legg inn en liten `loading`-indikator

Men: stopp hvis du føler du mister kontroll.

---

## Spørsmål til siste undervisningsdag

Skriv punkter her som du vil spørre om:
-
-
-

