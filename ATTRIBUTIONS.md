# Attributions

This document identifies publicly displayed external resources used in the Circato TFW dashboard showcase. Attribution is provided as required by each resource's license.

## JavaScript Libraries (Loaded via CDN)

| Name | Creator | Source | License | Modifications | Distribution Status |
|---|---|---|---|---|---|
| Leaflet.js | Vladimir Agafonkin and contributors | https://leafletjs.com | BSD 2-Clause | None | Loaded at runtime via unpkg CDN |
| Chart.js | Chart.js contributors | https://www.chartjs.org | MIT | None | Loaded at runtime via jsDelivr CDN |

## Map Data

| Name | Creator | Source | License | Modifications | Distribution Status |
|---|---|---|---|---|---|
| CartoDB Basemap Tiles | CartoDB / OpenStreetMap contributors | https://carto.com | ODbL (OpenStreetMap data) | None | Loaded at runtime as tile layer |
| India State Boundaries GeoJSON | datameet community | https://github.com/datameet/maps | CC BY 2.5 IN | None | Loaded at runtime via GitHub raw |

## Research and Methodology References

| Name | Creator | Source | License | Usage |
|---|---|---|---|---|
| Plastic waste inputs from land into the ocean (2015) | Jambeck, J.R. et al. | Science 347(6223), 768-771 | Copyright American Association for the Advancement of Science | Methodology referenced for leakage estimation model |
| CPCB Annual Report on Plastic Waste Management Rules (2023-24) | Central Pollution Control Board, India | https://cpcb.nic.in | Government of India public domain | Data source for waste generation and collection rate estimates |
| IMD Climate Normals (1991-2020) | India Meteorological Department | https://imd.gov.in | Government of India public domain | Data source for cooling degree days by climate zone |
| IS 3792:1978 — Guide for Heat Insulation | Bureau of Indian Standards | https://bis.gov.in | Government of India standard | Methodology referenced for HVAC energy calculations |

## Indian Standards Referenced

The following BIS standards are referenced in the project documentation and dashboards:

- IS 15462:2019 — Polymer Matrix Composite Wall Panels — Specification
- IS 3792:1978 — Guide for Heat Insulation of Buildings
- IS 3346:1980 — Method for Determination of Thermal Conductivity
- IS 3809:1979 — Method for Fire Resistance Test of Structures
- IS 16206:2013 — Method for Determination of Resistance to Fungi
- IS 9845:1998 — Method for Determination of Overall Migration
- IS 15657:2006 — Method for Determination of Volatile Organic Compounds

These standards are copyright Bureau of Indian Standards and are referenced for specification compliance purposes only.

## Note on Proprietary Data

The batch traceability data, unit economics parameters, and district-level leakage estimates used in the dashboards are based on Circato's operational data and CPCB public datasets. The specific business data, client names, and operational metrics are not distributed as part of this public showcase.
