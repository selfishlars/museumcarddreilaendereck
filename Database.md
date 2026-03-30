# Database.md — Museums-PASS Dreiländereck

Strukturierte Datenbasis für alle relevanten Informationen des Museums-PASS Projekts.

---

## TABELLE: passes

| id | holder    | purchase_date | expiry_date | price_eur |
|----|-----------|---------------|-------------|-----------|
| 1  | Anon 1    | 2026-03-07    | 2027-03-07  | 129.00    |
| 2  | Anon 2    | 2026-03-07    | 2027-03-07  | 129.00    |

**Gesamt-Investment:** 258,00 €
**Break-Even-Ziel:** 258,00 € Ersparnis

---

## TABELLE: travelers

| id | alias  | type     | birth_year_approx | notes               |
|----|--------|----------|--------------------|---------------------|
| 1  | Anon 1 | adult    | —                  | Pass-Inhaber        |
| 2  | Anon 2 | adult    | —                  | Pass-Inhaber        |
| 3  | Kind 1 | child    | ~2015              | älteres Kind        |
| 4  | Kind 2 | child    | ~2017              | jüngeres Kind (7 J.)|

---

## TABELLE: home_base

| field          | value                                           |
|----------------|-------------------------------------------------|
| name           | Heimatbasis                                     |
| street         | Eggbergstr. 52                                  |
| city           | Rheinfelden (Baden)                             |
| postal_code    | 79618                                           |
| country        | Deutschland                                     |
| lat            | 47.5551                                         |
| lon            | 7.7677                                          |

---

## TABELLE: visits

| id | museum_id | date       | travelers             | savings_local | currency | savings_eur | notes                        |
|----|-----------|------------|-----------------------|---------------|----------|-------------|------------------------------|
| 1  | FR-001    | 2026-03-07 | Anon1, Anon2, K1, K2  | 28.00         | EUR      | 28.00       | Kinder unter 18 frei         |
| 2  | CH-001    | 2026-03-22 | Anon1, Anon2, K1, K2  | 56.00         | CHF      | 58.95       | 56 CHF ÷ 0.95 ≈ 58.95 €      |

**Gesamtersparnis:** ~87 € (28 + 59)
**Thermometer:** 87 / 2500 × 100 = 3,48%
**Break-Even-Fortschritt:** 87 / 258 × 100 = 33,7%

---

## TABELLE: museums

### Besucht

| id     | name                        | city         | country | lat     | lon    | dist_km | website                        | price_eur | price_note                            | visited    |
|--------|-----------------------------|--------------|---------|---------|--------|---------|-------------------------------|-----------|---------------------------------------|------------|
| FR-001 | Château du Haut-Kœnigsbourg | Orschwiller  | FR      | 48.249  | 7.343  | 75      | haut-koenigsbourg.fr          | 28.00     | 2×14€, Kinder unter 18 frei           | 2026-03-07 |
| CH-001 | Basler Papiermühle           | Basel        | CH      | 47.554  | 7.605  | 13      | papiermuseum.ch               | 58.95     | 56 CHF (2 Erw. + 2 Ki.) ÷ 0.95       | 2026-03-22 |

---

### Schweiz — Top 5 (recherchierte Preise)

| id     | name                      | city       | dist_km | price_chf | price_eur | price_basis                                | website                      |
|--------|---------------------------|------------|---------|-----------|-----------|--------------------------------------------|------------------------------|
| CH-002 | Ballenberg Freilichtmuseum| Hofstetten | 85      | ~98       | ~103      | 2×32 + 2×17 CHF (Kinder 6–15)             | ballenberg.ch                |
| CH-003 | Zentrum Paul Klee          | Bern       | 105     | ~68       | ~72       | 2×20 + 2×14 CHF (Kinder bis 16 frei/red.) | zpk.org                      |
| CH-004 | Kunstmuseum Basel          | Basel      | 13      | ~52       | ~55       | 2×26 CHF, Kinder unter 16 frei (Sonntag)  | kunstmuseumbasel.ch          |
| CH-005 | Museum Tinguely            | Basel      | 13      | ~36       | ~38       | 2×18 CHF, Kinder unter 16 frei            | tinguely.ch                  |
| CH-006 | Bernisches Historisches M. | Bern       | 105     | ~32       | ~34       | 2×13 + Kinder (Familienkarte ~32 CHF)     | bhm.ch                       |

### Schweiz — Weitere (Distanz sortiert, Preise ausstehend)

| id     | name                              | city             | dist_km | website                          |
|--------|-----------------------------------|------------------|---------|----------------------------------|
| CH-007 | Augusta Raurica                   | Augst            | 10      | augustaraurica.ch                |
| CH-008 | Museum.BL                         | Liestal          | 20      | museumbl.ch                      |
| CH-009 | Historisches Museum Basel         | Basel            | 13      | hmb.ch                           |
| CH-010 | Museum der Kulturen Basel         | Basel            | 13      | mkb.ch                           |
| CH-011 | Naturhistorisches Museum Basel    | Basel            | 13      | nmbs.ch                          |
| CH-012 | Museum für Gegenwartskunst Basel  | Basel            | 13      | kunstmuseumbasel.ch               |
| CH-013 | Cartoonmuseum Basel               | Basel            | 13      | cartoonmuseum.ch                  |
| CH-014 | Jüdisches Museum der Schweiz      | Basel            | 13      | juedisches-museum.ch              |
| CH-015 | Spielzeug Welten Museum Basel     | Basel            | 13      | spielzeug-welten-museum-basel.ch  |
| CH-016 | Haus der Elektronischen Künste    | Münchenbuchsee   | 15      | hek.ch                            |
| CH-017 | Fondation Beyeler               | Riehen           | 17      | fondationbeyeler.ch               |
| CH-018 | Dreiländermuseum                  | Lörrach          | 18      | dreilaendermuseum.eu              |
| CH-019 | Vitra Design Museum               | Weil am Rhein    | 22      | design-museum.de                  |
| CH-020 | Museum Burghalde                  | Lenzburg         | 42      | museum-burghalde.ch               |
| CH-021 | Historisches Museum Olten         | Olten            | 48      | museum.olten.ch                   |
| CH-022 | Kunstmuseum Solothurn             | Solothurn        | 62      | kunstmuseum-so.ch                 |
| CH-023 | Naturmuseum Solothurn             | Solothurn        | 62      | naturmuseum.ch                    |
| CH-024 | Kunsthaus Zug                     | Zug              | 75      | kunsthauszug.ch                   |
| CH-025 | Forum Schweizer Geschichte        | Schwyz           | 85      | nationalmuseum.ch                 |
| CH-026 | Kunstmuseum Bern                  | Bern             | 105     | kunstmuseumbern.ch                |
| CH-027 | Museum für Kommunikation          | Bern             | 105     | mfk.ch                            |
| CH-028 | Schweizerisches Alpines Museum    | Bern             | 105     | alpinesmuseum.ch                  |
| CH-029 | Naturhistorisches Museum Bern     | Bern             | 105     | nmbe.ch                           |
| CH-030 | Kunstmuseum Thun                  | Thun             | 115     | kunstmuseumthun.ch                |
| CH-031 | Schloss Thun                      | Thun             | 115     | schlossthun.ch                    |
| CH-032 | Freilichtmuseum Stans             | Stans            | 120     | nidwaldner-museum.ch              |
| CH-033 | Swiss Open Air Museum Ballenberg  | Brienz           | 125     | ballenberg.ch                     |
| CH-034 | Kunstmuseum Luzern                | Luzern           | 95      | kunstmuseumluzern.ch              |
| CH-035 | Historisches Museum Luzern        | Luzern           | 95      | historischesmuseum.lu.ch          |
| CH-036 | Natur-Museum Luzern               | Luzern           | 95      | natur-museum.ch                   |
| CH-037 | Swiss Museum of Transport         | Luzern           | 95      | verkehrshaus.ch                   |
| CH-038 | Kunstmuseum Winterthur            | Winterthur       | 105     | kmw.ch                            |
| CH-039 | Technorama                        | Winterthur       | 105     | technorama.ch                     |
| CH-040 | Museum Oskar Reinhart             | Winterthur       | 105     | museumoskarreinhart.ch            |
| CH-041 | Kunsthaus Zürich                  | Zürich           | 110     | kunsthaus.ch                      |
| CH-042 | Forum Würth Arlesheim             | Arlesheim        | 10      | kunst.wuerth-ag.ch/de/wuerth_forum/forum |

### Schweiz — Basel-Museen (recherchierte Preise, via NotebookLM 2026-03-30)

Basis: 2 Erwachsene + 2 Kinder (~7 und ~9 J.). Kurs: 1 CHF = 1.10 EUR.

| id     | name                                    | city      | dist_km | price_chf | price_eur | price_basis                                         | website                            |
|--------|-----------------------------------------|-----------|---------|-----------|-----------|-----------------------------------------------------|------------------------------------|
| CH-043 | Anatomisches Museum Basel               | Basel     | 13      | 20        | 22        | 2×10 CHF, Kinder unter 11 frei                      | anatomisches-museum.unibas.ch      |
| CH-042 | Forum Würth Arlesheim                   | Arlesheim | 10      | 0         | 0         | KOSTENLOS                                           | kunst.wuerth-ag.ch                 |
| CH-007 | Augusta Raurica                         | Augst     | 10      | 28        | 31        | 2×8 + 2×6 CHF, Freilichtgelände gratis             | augustaraurica.ch                  |
| CH-044 | Antikenmuseum Basel und Sammlung Ludwig | Basel     | 13      | 24        | 26        | 2×12 CHF, Kinder unter 13 frei; Sa/So ganztags gratis | antikenmuseumbasel.ch           |
| CH-045 | Brasilea Stiftung                       | Basel     | 13      | 20        | 22        | 2×10 CHF, Kinder unter 12 frei                      | brasilea.com                       |
| CH-013 | Cartoonmuseum Basel                     | Basel     | 13      | 28        | 31        | 2×14 CHF, Kinder unter 10 frei                      | cartoonmuseum.ch                   |
| CH-046 | Fondation Herzog                        | Basel     | 13      | —         | —         | Nur nach Vereinbarung / Sonderausstellungen; kein Regeleintrittspreis | fondation-herzog.ch |
| CH-009 | Historisches Museum Basel – Barfüsserkirche | Basel | 13    | 36        | 40        | 2×18 CHF Kombiticket (3 Häuser, 7 Tage), Ki<13 frei | hmb.ch                           |
| CH-047 | Historisches Museum Basel – Haus zum Kirschgarten | Basel | 13 | 36     | 40        | Kombiticket (s. Barfüsserkirche)                    | hmb.ch                             |
| CH-048 | Historisches Museum Basel – Musikmuseum | Basel    | 13      | 36        | 40        | Kombiticket (s. Barfüsserkirche)                    | hmb.ch                             |
| CH-049 | Hafenmuseum Basel                       | Basel     | 14      | 46        | 51        | 2×14 + 2×9 CHF, schulpflichtige Ki zahlen          | hafenmuseum.ch                     |
| CH-050 | Kunsthalle Basel                        | Basel     | 13      | 24        | 26        | 2×12 CHF, Kinder unter 18 frei                      | kunsthallebasel.ch                 |
| CH-010 | Museum der Kulturen Basel               | Basel     | 13      | 32        | 35        | 2×16 CHF, Kinder unter 12 frei                      | mkb.ch                             |

### Schweiz — Weitere Museen Batch 2 (recherchierte Preise, via NotebookLM 2026-03-30)

Basis: 2 Erwachsene + 2 Kinder (~7 und ~9 J.). Kurs: 1 CHF = 1.10 EUR.

| id     | name                                        | city       | dist_km | price_chf | price_eur | price_basis                                              | website                   |
|--------|---------------------------------------------|------------|---------|-----------|-----------|----------------------------------------------------------|---------------------------|
| CH-011 | Naturhistorisches Museum Basel              | Basel      | 13      | 14        | 15        | 2×7 CHF, Kinder bis 13 frei; 1. So./letzte Stunde gratis | nmbs.ch                  |
| CH-051 | Museum Kleines Klingental                   | Basel      | 13      | 16        | 18        | 2×8 CHF, Kinder bis 13 frei                              | mkk.ch                    |
| CH-052 | Pharmaziemuseum der Universität Basel       | Basel      | 13      | 20        | 22        | 2×10 CHF, Kinder bis 11 frei; Ticket gilt auch für Anatomisches Museum | pharmaziemuseum.ch |
| CH-053 | S AM Schweizerisches Architekturmuseum      | Basel      | 13      | 24        | 26        | 2×12 CHF, Kinder bis 18 frei; Ticket gilt auch für Kunsthalle Basel | sam-basel.org |
| CH-015 | Spielzeug Welten Museum Basel               | Basel      | 13      | 14        | 15        | 2×7 CHF, Kinder bis 16 frei; weltgrösste Teddybärensammlung | swmb.museum          |
| CH-054 | Rehmann-Museum                              | Laufenburg | 15      | 10        | 11        | 2×5 CHF, Kinder bis 25 frei; Skulpturengarten            | rehmann-museum.ch         |
| CH-055 | Dichter:innen- und Stadtmuseum Liestal (DISTL) | Liestal | 18      | 10        | 11        | 2×5 CHF, Kinder bis 16 frei; 1. So. gratis              | distl.ch                  |
| CH-056 | Kunsthalle Palazzo                          | Liestal    | 18      | 10        | 11        | 2×5 CHF, Kinder bis 25 frei; kein Rollstuhlzugang       | palazzo.ch                |
| CH-008 | Museum.BL                                   | Liestal    | 18      | 16        | 18        | 2×8 CHF, Kinder bis 13 frei; 1. So. gratis              | museum.bl.ch              |
| CH-057 | Aargauer Kunsthaus                          | Aarau      | 55      | 34        | 37        | 2×17 CHF, Kinder bis 16 frei; Do 17–20 Uhr gratis       | aargauerkunsthaus.ch      |
| CH-058 | Stadtmuseum Aarau                           | Aarau      | 55      | 16        | 18        | 2×8 CHF, Kinder bis 16 frei                              | stadtmuseum.ch            |
| CH-028 | ALPS Alpines Museum der Schweiz             | Bern       | 105     | 40        | 44        | Familienkarte 40 CHF (2 Erw. + max. 3 Ki. bis 16 J.)   | alps.museum               |
| CH-027 | Museum für Kommunikation                    | Bern       | 105     | 48        | 53        | 2×18 + 2×6 CHF; ab 15:30 Uhr 30% Rabatt                | mfk.ch                    |
| CH-026 | Kunstmuseum Bern                            | Bern       | 105     | 48        | 53        | 2×24 CHF, Kinder bis 16 frei; Klee, Picasso, Hodler     | kunstmuseumbern.ch        |
| CH-029 | Naturhistorisches Museum Bern               | Bern       | 105     | 24        | 26        | 2×12 CHF, Kinder bis 16 frei; sehr familienfreundlich   | nmbe.ch                   |
| CH-059 | Abegg-Stiftung                              | Riggisberg | 110     | 20        | 22        | 2×10 CHF, Kinder bis 16 frei; Saison ab 26. April       | abegg-stiftung.ch         |
| CH-060 | Schloss Lenzburg                            | Lenzburg   | 65      | 35        | 39        | Familienkarte 35 CHF (2 Erw. + 2 Ki.); Kindermuseum     | schloss-lenzburg.ch       |

---

### Deutschland — Top 5 (recherchierte Preise, bestätigt via NotebookLM 2026-03-29)

| id     | name                       | city          | dist_km | price_eur | price_basis                                       | website                    |
|--------|----------------------------|---------------|---------|-----------|---------------------------------------------------|----------------------------|
| DE-001 | Fabergé Museum             | Baden-Baden   | 80      | ~38       | Familienkarte 38€ (Kinder unter 12 frei)          | faberge-museum.de          |
| DE-002 | Technoseum                 | Mannheim      | 155     | ~42       | 2×12 + 2×9€, kein Familientarif                  | technoseum.de              |
| DE-003 | Freilichtmuseum Vogtsbauernhof | Gutach   | 75      | ~34       | ca.-Wert (Preisseite nicht auslesbar)             | vogtsbauernhof.de          |
| DE-004 | Museum Frieder Burda       | Baden-Baden   | 80      | ~28       | ca.-Wert (Preisseite nicht auslesbar)             | museum-frieder-burda.de    |
| DE-005 | Badisches Landesmuseum     | Karlsruhe     | 125     | ~10       | Schloss bis 2026 geschlossen! Museum beim Markt: 2×5€ | landesmuseum.de        |

### Deutschland — Weitere (Distanz sortiert, Preise 2026-03-29 recherchiert)

| id     | name                          | city             | dist_km | price_eur | price_basis                               | website                             |
|--------|-------------------------------|------------------|---------|-----------|-------------------------------------------|-------------------------------------|
| DE-006 | Hochrheinmuseum Schloss Schönau | Bad Säckingen  | 15      | ~10       | 2×5€, Kinder bis 16 frei                 | badsaeckingen.de                    |
| DE-007 | Mineralienmuseum Bad Säckingen | Bad Säckingen  | 15      | —         | Preis ausstehend                          | mineralienfreunde-hochrhein.de      |
| DE-008 | Wildlife-Naturkundemuseum     | Bad Säckingen    | 15      | ~22       | 2×7 + 2×4€                               | wildkids-hochrhein.de               |
| DE-009 | Dreiländermuseum              | Lörrach          | 20      | ~6        | Familientarif 6€ (!!), Erw. 5€, Ki. 2€   | dreilaendermuseum.eu                |
| DE-010 | Freilichtmuseum Klausenhof    | Herrischried     | 30      | —         | Preis ausstehend                          | freilichtmuseum-klausenhof.de       |

### Schweiz — Batch 3 (recherchierte Preise, via NotebookLM 2026-03-30)

Basis: 2 Erwachsene + 2 Kinder (~7 und ~9 J.). Kurs: 1 CHF = 1.10 EUR.

| id     | name                  | city      | dist_km | price_chf | price_eur | price_basis                                                  | website                  |
|--------|-----------------------|-----------|---------|-----------|-----------|--------------------------------------------------------------|--------------------------|
| CH-061 | Vindonissa Museum     | Brugg     | 55      | 20        | 22        | Familienticket 20 CHF (2 Erw. + max. 5 Ki.)                  | museumaargau.ch          |
| CH-062 | Museum Langmatt       | Baden     | 58      | 24        | 26        | 2×12 CHF, Kinder bis 18 frei; Wiedereröffnung 9./10.5.2026  | langmatt.ch              |
| CH-063 | Museum Burghalde      | Lenzburg  | 65      | 20        | 22        | Familienticket 20 CHF; Ikonenmuseum inklusive               | museumburghalde.ch       |
| CH-064 | Museum Franz Gertsch  | Burgdorf  | 95      | 36        | 40        | 2×18 CHF, Kinder bis 10 frei; Sa. reduzierter Eintritt      | museum-franzgertsch.ch   |

### Deutschland — Batch 3 (recherchierte Preise, via NotebookLM 2026-03-30)

Basis: 2 Erwachsene + 2 Kinder (~7 und ~9 J., beide Schüler).

| id     | name                                        | city              | dist_km | price_eur | price_basis                                                        | website                       |
|--------|---------------------------------------------|-------------------|---------|-----------|--------------------------------------------------------------------|-------------------------------|
| DE-015 | Mineralienmuseum Bad Säckingen              | Bad Säckingen     | 15      | 17,50     | Familienkarte 17,50 €, alle Ki bis 15 inklusive                    | deutsches-mineralienmuseum.de |
| DE-016 | Hebelhaus Hausen                            | Hausen im Wiesental | 30    | 9,00      | 2×3 + 2×1,50 €; Literaturmuseum J. P. Hebel                      | hebelhaus-hausen.de           |
| DE-017 | Archäologisches Museum Colombischlössle     | Freiburg          | 35      | 10,00     | 2×5 €, Kinder unter 27 frei (Dauerpolitik Freiburg)               | museen-freiburg.de            |
| DE-018 | Augustinermuseum Freiburg                   | Freiburg          | 35      | 24,00     | 2×12 €, Ki unter 27 frei; Ticket = Tageskarte für alle Freiburger Museen | museen-freiburg.de      |
| DE-019 | Kunstverein Freiburg                        | Freiburg          | 35      | 4,00      | 2×2 €, Kinder bis 12 frei; Do. Eintritt frei                      | kunstvereinfreiburg.de        |
| DE-020 | Museum für Neue Kunst                       | Freiburg          | 35      | 14,00     | 2×7 €, Kinder unter 27 frei                                        | museen-freiburg.de            |
| DE-021 | Museum Natur und Mensch                     | Freiburg          | 35      | 10,00     | 2×5 €, Kinder unter 27 frei                                        | museen-freiburg.de            |
| DE-022 | Alamannen-Museum Vörstetten                 | Vörstetten        | 40      | 14,00     | 2×5 + 2×2 €; Schüler 2 €, Ki unter 6 frei                        | alamannen-museum.de           |
| DE-023 | Stadtmuseum Bad Krozingen (Litschgihaus)    | Bad Krozingen     | 40      | —         | Preis unbekannt; Do+Di 15–17 Uhr, 1.+3. So. im Monat             | bad-krozingen.de              |
| DE-024 | Oberrheinisches Bäder- und Heimatmuseum     | Bad Bellingen     | 45      | 0         | KOSTENLOS; So. 14–17 Uhr                                           | bad-bellingen.de              |

### Deutschland — Weitere (Distanz sortiert, Preise ausstehend)

| id     | name                                    | city              | dist_km | website                              |
|--------|-----------------------------------------|-------------------|---------|--------------------------------------|
| DE-006 | Museum am Burghof                       | Lörrach           | 15      | museum-am-burghof.de                 |
| DE-007 | Stadtmuseum Freiburg                    | Freiburg          | 30      | freiburg.de/museen                   |
| DE-008 | Augustinermuseum                        | Freiburg          | 30      | augustinermuseum.de                  |
| DE-009 | Museum für Neue Kunst Freiburg          | Freiburg          | 30      | freiburg.de/museen                   |
| DE-010 | Naturmuseum Freiburg                    | Freiburg          | 30      | naturmuseum-freiburg.de              |
| DE-011 | Archäologisches Museum Freiburg         | Freiburg          | 30      | archaeologie.uni-freiburg.de         |
| DE-012 | Museum für Stadtgeschichte              | Freiburg          | 30      | —                                    |
| DE-013 | Münster Freiburg (Museum)               | Freiburg          | 30      | —                                    |
| DE-014 | Schwarzwälder Freilichtmuseum Vogtsbauernhof | Gutach    | 75      | vogtsbauernhof.de                    |
| DE-015 | Römermuseum Augst                       | Augst/Bad Säckingen| 10     | augustaraurica.ch                    |
| DE-016 | Vitra Design Museum                     | Weil am Rhein     | 22      | design-museum.de                     |
| DE-017 | Museum Weißes Haus                      | Staufen           | 35      | —                                    |
| DE-018 | Dreiländermuseum                        | Lörrach           | 18      | dreilaendermuseum.eu                 |
| DE-019 | Museum Ettlingen                        | Ettlingen         | 90      | —                                    |
| DE-020 | ZKM Museum für Kunst und Medientechnologie | Karlsruhe     | 125     | zkm.de                               |
| DE-021 | Staatliche Kunsthalle Karlsruhe         | Karlsruhe         | 125     | kunsthalle-karlsruhe.de              |
| DE-022 | Stadtmuseum Karlsruhe                   | Karlsruhe         | 125     | stadtmuseum-karlsruhe.de             |
| DE-023 | Pfalzgalerie Kaiserslautern             | Kaiserslautern    | 160     | pfalzgalerie.de                      |
| DE-024 | Historisches Museum der Pfalz           | Speyer            | 150     | museum.speyer.de                     |
| DE-025 | Technik Museum Speyer                   | Speyer            | 150     | technik-museum.de                    |
| DE-026 | Museum Wiesbaden                        | Wiesbaden         | 200     | museum-wiesbaden.de                  |
| DE-027 | Städel Museum                           | Frankfurt         | 190     | staedelmuseum.de                     |
| DE-028 | Senckenberg Naturmuseum                 | Frankfurt         | 190     | senckenberg.de                       |
| DE-029 | Historisches Museum Frankfurt           | Frankfurt         | 190     | historisches-museum-frankfurt.de     |
| DE-030 | Schirn Kunsthalle Frankfurt             | Frankfurt         | 190     | schirn.de                            |
| DE-031 | Liebieghaus                             | Frankfurt         | 190     | liebieghaus.de                       |
| DE-032 | Museum für Angewandte Kunst             | Frankfurt         | 190     | museumsuferfest.de                   |
| DE-033 | Kunstmuseum Stuttgart                   | Stuttgart         | 170     | kunstmuseum-stuttgart.de             |
| DE-034 | Staatsgalerie Stuttgart                 | Stuttgart         | 170     | staatsgalerie.de                     |
| DE-035 | Württembergisches Landesmuseum          | Stuttgart         | 170     | landesmuseum-stuttgart.de            |
| DE-036 | Mercedes-Benz Museum                    | Stuttgart         | 170     | mercedes-benz.com/museum             |
| DE-037 | Porsche Museum                          | Stuttgart         | 170     | porsche.com/museum                   |
| DE-038 | Naturkundemuseum Stuttgart              | Stuttgart         | 170     | naturkundemuseum-bw.de               |
| DE-039 | Kunsthalle Mannheim                     | Mannheim          | 155     | kunsthalle-mannheim.de               |
| DE-040 | Reiss-Engelhorn-Museen                  | Mannheim          | 155     | rem-mannheim.de                      |
| DE-041 | Stadtgeschichtliches Museum Mannheim    | Mannheim          | 155     | stadtmuseum-mannheim.de              |
| DE-042 | Kurpfälzisches Museum                   | Heidelberg        | 140     | museum-heidelberg.de                 |
| DE-043 | Völkerkundemuseum Heidelberg            | Heidelberg        | 140     | voelkerkundemuseum-hd.de             |
| DE-044 | Schlossmuseum Heidelberg                | Heidelberg        | 140     | schloss-heidelberg.de                |
| DE-045 | Kunsthalle Tübingen                     | Tübingen          | 155     | kunsthalle-tuebingen.de              |
| DE-046 | Stadtmuseum Tübingen                    | Tübingen          | 155     | tuebingen.de/museen                  |
| DE-047 | Museum Haigerloch                       | Haigerloch        | 120     | —                                    |
| DE-048 | Donaueschingen Fürstenberg              | Donaueschingen    | 85      | fuerstenberg-sammlungen.de           |
| DE-049 | Franziskanermuseum Villingen            | Villingen-Schwenningen | 65 | franziskanermuseum.de               |
| DE-050 | Schwarzwaldmuseum Triberg               | Triberg           | 80      | schwarzwaldmuseum.com                |
| DE-051 | Museum Rottweil                         | Rottweil          | 100     | museum.rottweil.de                   |
| DE-052 | Stadtmuseum Überlingen                  | Überlingen        | 85      | ueberlingen.de/museum                |
| DE-053 | Rosgartenmuseum Konstanz                | Konstanz          | 80      | rosgartenmuseum.de                   |
| DE-054 | Kunstmuseum Singen                      | Singen            | 65      | kunstmuseum-singen.de                |
| DE-055 | Hegau Museum                            | Singen            | 65      | hegau-museum.de                      |
| DE-056 | Museum des Landkreises Waldshut         | Bad Säckingen     | 25      | —                                    |
| DE-057 | Kloster Maulbronn                       | Maulbronn         | 115     | kloster-maulbronn.de                 |
| DE-058 | Badisches Landesmuseum Karlsruhe        | Karlsruhe         | 125     | landesmuseum.de                      |
| DE-059 | Kunsthalle Baden-Baden                  | Baden-Baden       | 80      | kunsthalle-baden-baden.de            |
| DE-060 | Museum la8                              | Baden-Baden       | 80      | museum-la8.de                        |
| DE-061 | Stadtmuseum Baden-Baden                 | Baden-Baden       | 80      | —                                    |
| DE-062 | Haus der Geschichte Baden-Württemberg   | Stuttgart         | 170     | hdgbw.de                             |

---

### Frankreich — Top 5 (recherchierte Preise)

| id     | name                        | city         | dist_km | price_eur | price_basis                               | website                        |
|--------|-----------------------------|--------------|---------|-----------|-------------------------------------------|-------------------------------|
| FR-002 | Cité de l'Automobile (Schlumpf) | Mulhouse | 35      | ~48       | Familienticket 2 Erw. + 2 Ki.            | citedelautomobile.com         |
| FR-003 | Cité du Train               | Mulhouse     | 35      | ~46       | 2×13 + 2×10 = 46€                        | citedutrain.com               |
| FR-004 | Saline Royale               | Arc-et-Senans| 120     | ~38       | 2×12 + 2×7 = 38€                         | salineroyale.com              |
| FR-005 | Citadelle de Besançon       | Besançon     | 120     | ~36       | Familienticket ~36€                       | citadelle.com                 |
| FR-006 | Centre Pompidou-Metz        | Metz         | 200     | ~24       | 2×12€, Kinder unter 18 frei              | centrepompidou-metz.fr        |

### Frankreich — Weitere (Distanz sortiert, Preise ausstehend)

| id     | name                                    | city              | dist_km | website                                |
|--------|-----------------------------------------|-------------------|---------|----------------------------------------|
| FR-007 | Musée de l'Impression sur Étoffes       | Mulhouse          | 35      | musee-impression.com                   |
| FR-008 | Musée des Beaux-Arts de Mulhouse        | Mulhouse          | 35      | —                                      |
| FR-009 | Musée Historique de Mulhouse            | Mulhouse          | 35      | —                                      |
| FR-010 | Électropolis                            | Mulhouse          | 35      | electropolis.fr                        |
| FR-011 | Zoo de Mulhouse                         | Mulhouse          | 35      | zoo-mulhouse.com                       |
| FR-012 | Musée d'Unterlinden                     | Colmar            | 45      | musee-unterlinden.com                  |
| FR-013 | Musée Bartholdi                         | Colmar            | 45      | musee-bartholdi.fr                     |
| FR-014 | Musée du Jouet                          | Colmar            | 45      | —                                      |
| FR-015 | Écomusée d'Alsace                       | Ungersheim        | 42      | ecomusee-alsace.fr                     |
| FR-016 | Musée Würth                             | Erstein           | 55      | musee-wurth.fr                         |
| FR-017 | Château de Fleckenstein                 | Lembach           | 80      | chateau-fleckenstein.fr                |
| FR-018 | Château d'Andlau                        | Andlau            | 60      | —                                      |
| FR-019 | Musée Alsacien de Strasbourg            | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-020 | Musée des Beaux-Arts de Strasbourg      | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-021 | Musée Archéologique de Strasbourg       | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-022 | Musée d'Art Moderne de Strasbourg       | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-023 | Musée Historique de Strasbourg          | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-024 | Palais Rohan Strasbourg                 | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-025 | Musée de l'Œuvre Notre-Dame             | Strasbourg        | 70      | musees.strasbourg.eu                   |
| FR-026 | Planetarium Strasbourg                  | Strasbourg        | 70      | planetarium-strasbourg.fr              |
| FR-027 | Mémorial Alsace-Moselle                 | Schirmeck         | 85      | memorial-alsace-moselle.com            |
| FR-028 | Musée de la Mine de Ronchamp            | Ronchamp          | 105     | mine-ronchamp.fr                       |
| FR-029 | Chapelle Notre-Dame du Haut             | Ronchamp          | 105     | collinenotredameduhaut.com             |
| FR-030 | Citadelle de Neuf-Brisach               | Neuf-Brisach      | 40      | —                                      |
| FR-031 | Musée Lalique                           | Wingen-sur-Moder  | 90      | musee-lalique.com                      |
| FR-032 | Château du Haut-Barr                    | Saverne           | 90      | —                                      |
| FR-033 | Mémorial de la ligne Maginot (Schoenenbourg) | Hunspach    | 100     | lignemaginot.com                       |
| FR-034 | Musée de la Poterie de Betschdorf       | Betschdorf        | 100     | —                                      |
| FR-035 | Hagondange — Clouange                   | Hagondange        | 185     | —                                      |
| FR-036 | Musée de la Cour d'Or                   | Metz              | 200     | musee.metz.fr                          |
| FR-037 | Fort de Guentrange                      | Thionville        | 210     | —                                      |
| FR-038 | Musée de la Sidérurgie                  | Uckange           | 200     | —                                      |
| FR-039 | Musée de Bliesbruck-Reinheim            | Bliesbruck        | 200     | bliesbruck-reinheim.eu                 |
| FR-040 | Château de Malbrouck                    | Manderen          | 200     | chateau-malbrouck.com                  |
| FR-041 | Musée de la Résistance                  | Besançon          | 120     | —                                      |
| FR-042 | Musée des Beaux-Arts de Besançon        | Besançon          | 120     | mba.besancon.fr                        |
| FR-043 | Musée du Temps                          | Besançon          | 120     | musee-du-temps.fr                      |
| FR-044 | Musée des Maisons Comtoises             | Nancray           | 115     | maisons-comtoises.org                  |
| FR-045 | Musée de Vesoul                         | Vesoul            | 105     | —                                      |
| FR-046 | Musée des Beaux-Arts de Colmar (Unterlinden) | Colmar    | 45      | musee-unterlinden.com                  |
| FR-047 | Musée de la Chartreuse               | Molsheim          | 65      | —                                      |
| FR-048 | Chemin de la Mémoire des Carrières     | Vieux-Thann       | 38      | —                                      |
| FR-049 | Musée du Sundgau                        | Altkirch          | 28      | musee-sundgau.fr                       |
| FR-050 | Château de la Hunerbourg               | Obersteinbach     | 90      | —                                      |
| FR-051 | Musée de la Poterie                     | Soufflenheim      | 100     | —                                      |
| FR-052 | Musée d'Art et d'Histoire de Belfort    | Belfort           | 65      | belfort.fr/musee                       |

---

## TABELLE: savings_summary

| field                  | value    | unit |
|------------------------|----------|------|
| total_savings          | 87.00    | EUR  |
| pass_cost              | 258.00   | EUR  |
| break_even_remaining   | 171.00   | EUR  |
| visits_count           | 2        |      |
| avg_savings_per_visit  | 43.50    | EUR  |
| thermometer_pct        | 3.48     | %    |
| break_even_pct         | 33.72    | %    |
| thermometer_scale_max  | 2500.00  | EUR  |
| break_even_marker_pct  | 10.32    | %    |

---

## TABELLE: currency_rates

| from | to  | rate   | notes                        |
|------|-----|--------|------------------------------|
| CHF  | EUR | ÷ 0.95 | 1 CHF ≈ 1.053 EUR (2026-03) |

*Hinweis: Kurs variiert. Für alle Berechnungen wird CHF ÷ 0.95 verwendet.*

---

## Konventionen & Berechnungsregeln

### Preis-Ermittlung
- **Familienticket bevorzugen**, wenn 2 Erw. + 2 Kinder abgedeckt
- Kinder unter 18 oft frei (Schweiz, Frankreich)
- Kinder unter 12 oft frei (Deutschland)
- Preise mit `~` und `*` markiert = ca.-Wert aus Training-Daten
- Aktualisierung nötig: für alle Museen ohne Preis

### Distanz-Berechnung
- Von: Rheinfelden (Baden), Eggbergstr. 52 (47.5551°N, 7.7677°E)
- Straßendistanz (nicht Luftlinie)
- Werte gerundet auf ~5 km

### Ersparnis-Berechnung
- Ersparnis = Regulärer Eintritt ohne Pass
- CHF → EUR: Betrag ÷ 0.95
- Kinder-Freieintritte werden als 0 gerechnet (keine Ersparnis gelistet wenn Kinder ohnehin frei sind — außer wenn der Pass die Elterntickets ersetzt)

---

*Zuletzt aktualisiert: 2026-03-28*
*Datenstand Besuche: 2 (Stand 2026-03-22)*
