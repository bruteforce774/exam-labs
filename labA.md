# Lab A – Vue + Pinia: Grunnstruktur og State-forståelse

> **Formål**  
> Denne laben er ment som repetisjon og forberedelse til obligatorisk oppgave i Emne 2 og 3.  
> Du skal **sette opp en enkel Vue + Pinia-applikasjon**, med fokus på *arkitektur, state, props og actions* – ikke ferdig funksjonalitet.

Dette er et **arbeidsdokument**:
- Du kan skrive direkte i det
- Legge inn egne notater
- Markere ting du er usikker på
- Be om hjelp på siste undervisningsdag

---

## 🎯 Læringsmål for lab A

Etter denne laben skal du kunne:
- Forklare rollen til **Vue**, **Pinia** og **Router** i et SPA
- Skille mellom:
  - applikasjonstilstand (Pinia)
  - UI-tilstand (komponent)
- Bruke:
  - `state`
  - `actions`
  - `getters (computed)` i Pinia
- Følge prinsippet:
  **Én komponent kjenner store – resten får data via props**

---

## 🧠 Mental modell (les før du koder)

Svar kort for deg selv før du starter:

- Hva er *én ting* Pinia er ansvarlig for?
- Hva er *én ting* en Vue-komponent er ansvarlig for?
- Hvor skal logikk ligge – og hvor skal rendering ligge?

(Skriv gjerne stikkord her 👇)

---

## 1️⃣ Oppsett av prosjekt

### 1.1 Opprett prosjekt

```bash
npm create vite@latest lab-a -- --template vue-ts
cd lab-a
npm install
npm run dev
```

Velg:
- TypeScript
- Vue 3

---

### 1.2 Rydd prosjektet

Gjør følgende:
- Slett unødvendige filer i `src/`
- Behold:
  - `main.ts`
  - `App.vue`

Målet er å starte **så tomt som mulig**.

---

## 2️⃣ Installer og koble Pinia

### 2.1 Installer

```bash
npm install pinia
```

---

### 2.2 Koble Pinia til Vue

Åpne `main.ts` og:
- importer Pinia
- opprett store
- registrer den på appen

**Sjekkpunkt**:
- Applikasjonen kjører fortsatt
- Ingen feil i konsollen

(Noter her hvis noe var uklart 👇)

---

## 3️⃣ Lag første Pinia-store

### 3.1 Struktur

Opprett mappe:

```txt
src/stores
```

Opprett fil:

```txt
src/stores/counterStore.ts
```

---

### 3.2 State

I store-en:
- bruk `defineStore`
- lag en `state` med:
  - `count: number`

**Spørsmål å svare på i tekst:**
- Hvorfor er dette *applikasjonstilstand* og ikke UI-tilstand?

---

### 3.3 Actions

Legg til actions:
- `increment()`
- `decrement()`

Regler:
- Kun actions får endre state
- Ingen direkte mutasjon fra komponenter

---

### 3.4 Getter (computed)

Lag en getter:
- `doubleCount`

Tenk gjennom:
- Hvorfor er dette en getter og ikke en metode?

---

## 4️⃣ Bruk store i én komponent

### 4.1 App.vue som *container*

Bruk `App.vue` som:
- eneste komponent som kjenner store
- ansvarlig for å hente data fra store

Vis:
- `count`
- `doubleCount`

---

### 4.2 Knapper

Legg til knapper som:
- kaller actions i store

**Viktig:**
- komponenten skal *ikke* endre state direkte

---

## 5️⃣ Splitt i "smart" og "dum" komponent

### 5.1 Opprett ny komponent

Lag:

```txt
src/components/CounterView.vue
```

Denne komponenten skal:
- få `count` via props
- få callbacks via emits
- ikke kjenne Pinia

---

### 5.2 Flytt rendering

Flytt:
- visning av tall
- knapper

fra `App.vue` til `CounterView.vue`

`App.vue`:
- sender data ned
- lytter på events
- kaller store-actions

---

## 6️⃣ Refleksjon (viktig!)

Svar skriftlig (stikkord er nok):

- Hva gjør denne arkitekturen lettere å teste?
- Hva blir lettere når applikasjonen vokser?
- Hva minner dette om fra frameworkless-koden dere har sett før?

---

## ✅ Ferdig når

Du har:
- én Pinia store
- én komponent som kjenner store
- én komponent som bare renderer
- ingen direkte state-mutasjon i komponenter

---

## ⏭️ Videre

Dette er **Lab A**.

Neste steg (Lab B) vil bygge videre på dette med:
- lister
- avledet state
- mer realistisk datastruktur

Ikke gjør mer nå – stopp her og noter spørsmål.

