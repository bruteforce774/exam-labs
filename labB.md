# Lab B – Vue + Pinia: Lister, avledet state og struktur

> **Formål**  
> Denne laben bygger videre på Lab A og fokuserer på **mer realistisk applikasjonsstate**, avledede verdier og tydeligere struktur.  
> Du skal *ikke* lage en ferdig applikasjon – du skal forstå mønstrene.

Dette er fortsatt et **arbeidsdokument**:
- skriv egne notater
- legg inn TODO-er
- marker det du vil spørre om på siste undervisningsdag

---

## 🎯 Læringsmål for lab B

Etter denne laben skal du kunne:
- Modellere **state som lister av objekter**
- Flytte beregningslogikk til **getters i Pinia**
- Skille tydelig mellom:
  - rå state
  - avledet state
- Bruke **props + emits** i komponenter som renderer lister
- Se tydelig parallell til `getViewState` fra frameworkless-arkitektur

---

## 🧠 Mental modell (før du starter)

Tenk gjennom:

- Hvilken state *må* lagres eksplisitt?
- Hvilken state kan *beregnes*?
- Hvorfor er avledet state farlig å lagre direkte?

Noter stikkord her 👇

---

## 1️⃣ Utvid state-modellen

### 1.1 Ny datastruktur

I Pinia store:
- erstatt enkel `count`
- med en liste av objekter, f.eks.:
  - `items`

Hvert element kan ha:
- `id: number`
- `title: string`
- `quantity: number`
- `price: number`

> 💡 Dette er *kun eksempel*. Velg navn som gir mening.

---

### 1.2 Types

Opprett (eller utvid):

```txt
src/types.ts
```

Definer:
- interface/type for elementene i listen

**Spørsmål:**
- Hvorfor er det nyttig å samle typer i én fil?

---

## 2️⃣ Actions som eneste inngang

### 2.1 Oppdaterings-actions

Lag actions i store for:
- legge til et element
- oppdatere `quantity`
- fjerne et element

Regler:
- Ingen komponent skal vite *hvordan* state endres
- Komponenter sier bare *hva* som skjedde

---

### 2.2 Små actions, tydelig ansvar

Vurder:
- én action per intensjon
- ikke én action som gjør «alt»

Skriv kort her:
- Hvilke actions har du laget?

---

## 3️⃣ Avledet state (getters)

### 3.1 Første getter

Lag en getter som:
- summerer antall elementer (eller total quantity)

Eksempel:
- `itemCount`

---

### 3.2 Andre getter

Lag en getter som:
- beregner totalpris

Tenk:
- Hvorfor hører denne logikken hjemme i store-en?

---

### 3.3 Sammenligning

Svar skriftlig:
- Hva tilsvarer disse getterene i frameworkless-arkitekturen?

---

## 4️⃣ Komponent for listevisning

### 4.1 Ny komponent

Lag:

```txt
src/components/ItemList.vue
```

Denne komponenten skal:
- motta liste via props
- rendre elementene
- emitte events ved brukerhandling

---

### 4.2 Ingen forretningslogikk

Sjekk:
- ingen beregninger i komponenten
- ingen direkte state-endring

Marker her hvis du ble fristet til å bryte regelen 👀

---

## 5️⃣ Container-komponent

### 5.1 Én komponent kjenner store

Bruk samme prinsipp som i Lab A:
- én container (App.vue eller View-komponent)
- alle andre er presentasjonskomponenter

Containeren:
- henter state
- sender props
- kaller actions på events

---

## 6️⃣ Refleksjon

Svar med stikkord:

- Hva skjer hvis du flytter beregningene tilbake til komponentene?
- Hva blir enklere å teste nå?
- Hvor ser du tydelig igjen `getViewState`-ideen?

---

## ✅ Ferdig når

Du har:
- listebasert state
- minst to getters
- tydelig skille mellom container og presentasjon
- ingen beregningslogikk i komponenter

---

## ⏭️ Videre

Dette er **Lab B**.

Lab C vil fokusere på:
- asynkron data
- livssyklus (`onMounted`)
- forberedelse til routing

Stopp her. Ikke forskutter Lab C.

