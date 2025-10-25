// Category-based JSON structure
const categories = {
  "Water Sensitive Governance": {
    "Knowledge, skills and organisational capacity": [
      "1. Integrated water skills are rare; dominated by engineering. Few training opportunities. Knowledge often lost due to staff turnover.",
      "2. Integrated water skills exist but limited to a few; engineering dominates. Training supports capacity, but turnover causes knowledge loss.",
      "3. Integrated water skills are maintained and updated. Engineering complemented by other disciplines. Some alliances with knowledge brokers.",
      "4. Integrated water skills are science-informed, regularly updated, and multi-disciplinary. Strong links with knowledge brokers. Multidisciplinary skills embedded in decision-making.",
      "5. Integrated water skills are science-informed, actively updated, and supported by a strong learning culture. Multidisciplinary skills applied in projects and decisions. Organisations fund research and capacity building."
    ],
    "Water is key element in campus planning and design": [
      "1. Water policy beyond basic services is rarely included in planning.",
      "2. Sustainable water policy exists but lacks integrated planning. Regulations exist but are not enforced.",
      "3. Policy acknowledges water’s role. Some coordination with utilities. Early advocacy, guidance, and pilot water-sensitive designs. Regulation enforcement emerging.",
      "4. Policy links water to liveability and sustainability. Formal collaboration established. Standards include water-sensitive incentives. Designs are common, with monitoring in place.",
      "5. Water fully integrated into planning. Governance structures embedded. Policies and regulations include clear water objectives. Water-sensitive design is standard, with ongoing monitoring."
    ],
    "Cross-sector institutional arrangements and processes": [
      "1. Institutional arrangements are lacking or unstable. departments act alone with unclear responsibilities.",
      "2. Some arrangements exist; coordination happens only when necessary or enforced.",
      "3. Arrangements are mostly clear and embedded. Some collaboration and platforms promote integration.",
      "4. Arrangements are transparent, embedded, and adaptive. departments share information; networks and partnerships support coordination.",
      "5. Arrangements are mandated and embedded. Full transparency, collaboration at all project stages, cross-sector work, and joint accountability are standard."
    ],
    "Public engagement, participation and transparency": [
      "1. Public rarely informed; little opportunity or support for participation.",
      "2. Public informed on some activities but limited influence; no formal engagement or transparency policy.",
      "3. Public engaged in some governance via meetings, surveys, or consultations.",
      "4. Formal engagement and transparency policies in place; inhabitants participate actively through groups and committees with ongoing dialogue.",
      "5. Frequent, inclusive engagement is formal policy; inhabitants play leadership roles, collaborate with institutions, and help shape decisions."
    ],
    "Leadership, long-term vision and commitment": [
      "1. Leadership focused only on basic services (security and health). No recognition of broader water-sensitive value.",
      "2. Individuals push water-sensitive ideas but lack senior backing and impact.",
      "3. Individuals gain some organisational influence; several leaders support water-sensitive agendas and initiatives.",
      "4. Senior leaders advocate and embed a water-sensitive vision. Funding and incentives support programs. Departments provide sector-wide leadership.",
      "5. Senior leaders and departments fully commit to a water-sensitive vision in policy and strategy, with long-term aspirations and resources to achieve it."
    ],
    "Water resourcing and funding to deliver broad societal value": [
      "1. Funding driven by politics, no business case or analysis.",
      "2. Funding decisions based on simple cost reasoning (cheapest option).",
      "3. Funding guided by financial analysis with some societal/environmental consideration; ad hoc budget for water-sensitive practices.",
      "4. Funding guided by full cost-benefit analysis with consistent societal/environmental consideration; regular budget for water-sensitive practices.",
      "5. Funding guided by comprehensive cost-benefit analysis including intergenerational equity; substantial, consistent budget plus innovation funds."
    ]
  },

  "Increase community capital": {
    "Water literacy": [
      "1. Little or no understanding of the water cycle; no interest.",
      "2. Some interest, but limited understanding.",
      "3. General understanding of most of the water cycle and basic sector roles; know what they are paying for.",
      "4. Strong understanding of water cycle, sector roles, and current situation; aware of water-sensitive solutions; reasonable outreach participation.",
      "5. Deep understanding of water cycle, sector roles, and details of the current situation; strong interest in water-sensitive solutions; outreach co-developed with community and highly attended."
    ],
    "Connection with water": [
      "1. No connection with water assets; water not seen as part of place.",
      "2. Some connection in parts of the campus; mixed perceptions; role in green infrastructure not appreciated.",
      "3. Reasonable connection; water valued for sense of place in many areas; green infrastructure valued mainly for gardens.",
      "4. Strong connection; water brings pride and shapes neighbourhood character; many appreciate its role in green infrastructure and liveability.",
      "5. Strong connection citywide; water central to sense of place and character; its role in green infrastructure and liveability is widely celebrated."
    ],
    "Shared ownership, management and responsibility of water assets": [
      "1. No community or hostel ownership; responsibility lies with formal water authorities; no interest in change.",
      "2. Formal authorities hold responsibility; some ad hoc hostels solutions exist but are unmonitored.",
      "3. Hostels/communities have small role; local solutions monitored by authorities to inform planning.",
      "4. Authorities encourage community involvement; local solutions coordinated and monitored; neighbourhood design informed by community.",
      "5. Communities play significant, integrated role; local solutions coordinated, monitored, and connected to broader networks; design implemented in close collaboration."
    ]
  },

  "Water Quantity": {
    "Drinking water availability": [
      "1. <8 hours/day",
      "2. 8–12 hours/day",
      "3. 12–16 hours/day",
      "4. 16–20 hours/day",
      "5. 24×7 continuous supply"
    ],
    "utility water(water used for bathing, washing etc.) availability": [
      "1. <8 hours/day",
      "2. 8–12 hours/day",
      "3. 12–16 hours/day",
      "4. 16–20 hours/day",
      "5. 24×7 continuous supply"
    ],
    "Demand to supply ratio": [
      "1. Supply capacity less than the average demand (x); campus likely to face shortages.",
      "2. Supply capacity equal to the average demand (x); no buffer for peak usage, maintenance, or emergencies.",
      "3. Supply capacity 1.1 × x; small buffer, may handle minor peaks or short-term issues.",
      "4. Supply capacity 1.25 × x; moderate buffer, can handle most peaks and minor system failures.",
      "5. Supply capacity 1.5 × x or more; ample buffer for peak demand, emergencies, and future growth; highly reliable."
    ],
    "Adequate water pressure": [
      "1. <50% of buildings receive adequate water pressure at the top floor; majority of upper floors face shortages.",
      "2. 50–65% of buildings have adequate top-floor water pressure; high-rises mostly under-served.",
      "3. 65–80% of buildings have adequate top-floor water pressure; mid-rise buildings mostly fine, high-rises partly affected.",
      "4. 80–95% of buildings have adequate top-floor water pressure; only the tallest buildings may need booster pumps.",
      "5. >95–100% of buildings have consistent, reliable top-floor water pressure; all high-rises adequately supplied at all times."
    ],
    "Available water sources": [
      "1. Campus has only one source of water; extremely sensitive to disruptions.",
      "2. Campus has one primary source with limited backup; high sensitivity.",
      "3. Campus has two independent sources; moderate sensitivity.",
      "4. Campus has three to four sources; low sensitivity.",
      "5. Campus has multiple (>3) major sources; not sensitive to water supply interruptions."
    ]
  },

  "Water Quality": {
    "Checking water quality at the source": [
      "1. Water quality (pH, turbidity, microbial tests, etc.) is not checked regularly, no records are kept, and no treatment or corrective action is documented.",
      "2. Water quality is checked occasionally, some basic records exist, but monitoring is inconsistent and corrective measures are not systematic.",
      "3. Water quality is checked periodically (e.g., weekly or monthly), records are partially maintained, and minor corrective actions are taken as needed.",
      "4. Water quality is checked regularly (e.g., 2–3 times per week), records are well-maintained, and standard corrective actions are implemented when deviations occur.",
      "5. Water quality is checked every day (pH, turbidity, microbial, chemical tests), detailed records are maintained daily, alerts for deviations are in place, and proactive treatment measures ensure safe water consistently."
    ],
    "Water treatment capacity": [
      "1. Treatment capacity meets less than 50% of the campus’s total water demand.",
      "2. Treatment capacity meets about 50–75% of the campus’s total water demand.",
      "3. Treatment capacity roughly equals the campus’s total water demand (1× need).",
      "4. Treatment capacity exceeds the campus’s total water demand by up to 1.5×.",
      "5. Treatment capacity is at least twice (2×) the total water demand of the campus."
    ],
    "Outside reliance for drinking water": [
      "1. Entire population depends completely on external sources for drinking water.",
      "2. Majority (>75%) rely on external drinking water sources with minimal on-site provision.",
      "3. Moderate reliance (around 50%) on external sources, supported by partial on-site supply.",
      "4. Minor dependence (<25%) on external sources due to well-developed on-site drinking water systems.",
      "5. Fully self-sufficient campus with independent, safe, and sustainable on-site drinking water supply."
    ],
    "Availability of water purification systems in campus buildings": [
      "1. <50% of campus has buildings equipped with functional water purification systems.",
      "2. 50-65% of campus has buildings equipped with functional water purification systems.",
      "3. 65-80% of campus has buildings equipped with functional water purification systems.",
      "4. 80-95% of campus has buildings equipped with functional water purification systems.",
      "5. 100% of campus has buildings equipped with functional water purification systems."
    ],
    "Water quality after water purification systems": [
      "1. Water is visibly dark, dirty, has debris or has unpleasant smell.",
      "2. No visible dirt but microscopic impurities (bacterial content).",
      "3. No bacterial content; high TDS, chlorine content, pH etc.",
      "4. Clean, safe drinking water."
    ],
    "Water filter maintenance": [
      "1. No one is accountable for maintenance or repair; filters rarely repaired or maintained.",
      "2. Ad-hoc maintenance; repairs take several days, irregular upkeep.",
      "3. Assigned staff handle basic maintenance; issues resolved in 2–3 days.",
      "4. Campus supervised maintenance; issues fixed within 24 hours with regular checks.",
      "5. High accountability; issues resolved within 12 hours with strict preventive maintenance."
    ],
    "Water related illness": [
      "1. No investigation; sick individuals manage illness on their own.",
      "2. Ad-hoc response; some reporting, but no formal committee(water warriors) or testing.",
      "3. Campus health officer investigates; water testing may be done after several cases.",
      "4. Dedicated committee formed; investigation and corrective action within 24–48 hours.",
      "5. Rapid, committee-driven response; water testing, treatment, and preventive measures."
    ],
    "Environment near water purification devices": [
      "1. Filthy zone: Dirty surroundings, strong odor, garbage/sewage nearby.",
      "2. Poor hygiene zone: Stagnant water, flies, open drains close by.",
      "3. Basic safe zone: No visible filth, but damp, risk of contamination.",
      "4. Clean zone: Dry, ventilated space with minimal contamination risk.",
      "5. Hygienic safe zone: Clean, dry, odor-free, dedicated space for safe drinking water."
    ],
    "utility water(water used for bathing, washing etc.) quality": [
      "1. Raw dirty water: visibly polluted with debris/odor.",
      "2. Partially treated water: looks clear but has microbes.",
      "3. Treated water: pathogen-free but high TDS/chemicals.",
      "4. High-quality utility water(water used for bathing, washing etc.): near-potable, safe for sensitive non-drinking uses."
    ],
    "Water quality transparency": [
      "1. No water quality reports are prepared or shared with residents.",
      "2. Reports are prepared occasionally but not shared with residents.",
      "3. Reports are shared internally with limited access for residents upon request.",
      "4. Reports are regularly shared with residents through notices or digital platforms.",
      "5. Reports are proactively and transparently shared with all residents in real time through accessible public dashboards or regular updates."
    ]
  },

  "Sustainable Water Management": {
    "Percentage of water demand(55 lpcd) met by recycled water": [
      "1. <5% → Negligible contribution; almost no recycling.",
      "2. 5–15% → Low contribution; limited recycling.",
      "3. 15–30% → Moderate contribution; partial demand met.",
      "4. 30–50% → High contribution; significant portion of demand met.",
      "5. >50% → Very high contribution; major portion of demand met."
    ],
    "Rainwater harvesting": [
      "1. <10% → Very poor implementation; negligible harvesting.",
      "2. 10–30% → Low implementation; minor portion of roof used.",
      "3. 30–50% → Moderate implementation; significant portion harvested.",
      "4. 50–75% → High implementation; majority of roof harvested.",
      "5. >75% → Excellent implementation; almost entire roof harvested."
    ],
    "Storage Capacity": [
      "1. <1 day → Very low storage; emergency supply insufficient.",
      "2. 1–2 days → Low storage; limited backup.",
      "3. 2–4 days → Moderate storage; some buffer available.",
      "4. 4–7 days → High storage; reliable backup supply.",
      "5. >7 days → Excellent storage; long-term backup available."
    ],
    "Leakage detection": [
      "1. No automatic leakage detection; leaks identified only through manual checks or complaints.",
      "2. Basic manual monitoring using visible indicators or periodic inspections to spot leaks.",
      "3. Semi-automatic detection using basic sensors that flag anomalies for manual verification.",
      "4. Automated leakage detection system providing real-time alerts and digital monitoring dashboards.",
      "5. Advanced intelligent system with real-time automatic detection, pinpoint localization, and self-activated containment or shut-off."
    ]
  },

  "Others": {
    "Number of water sources to treatment facilities": [
      "1. All water sources share a single treatment facility (high risk if facility fails); ratio = total sources : 1.",
      "2. Most sources share one facility, a few have separate treatment; ratio ≈ 3–4 sources : 1 facility.",
      "3. About half of the sources have separate treatment units; ratio ≈ 2 sources : 1 facility.",
      "4. Most sources have their own treatment facility; ratio ≈ 1.5 sources : 1 facility.",
      "5. Each water source has its own dedicated treatment facility (or more); ratio = 1 source : 1 facility or better; highly resilient."
    ],
    "Electricity Availability (Averaged over a month)": [
      "1. Electricity available for <10 hours/day; severe outages, highly disruptive.",
      "2. Electricity available for 10–14 hours/day; frequent outages affect daily activities.",
      "3. Electricity available for 14–18 hours/day; moderate reliability, backup often required.",
      "4. Electricity available for 18–20 hours/day; mostly reliable with minor outages.",
      "5. Electricity available for >20 hours/day; highly reliable supply, minimal interruptions."
    ],
    "Air Conditioners (efficiency)": [
      "1. AC units use open-loop or water-cooled systems with no recycling or recovery; high continuous water loss.",
      "2. Basic cooling systems with minimal water management; no condensate reuse or efficiency controls.",
      "3. Some water-efficient features present, such as partial condensate collection or optimized cooling cycles.",
      "4. Majority of ACs use water-saving technologies like closed-loop cooling or condensate reuse for secondary purposes.",
      "5. All AC systems are high-efficiency, closed-loop, or air-cooled units with active water recovery and reuse mechanisms."
    ],
    "Air Conditioners (accountability)": [
      "1. ACs run continuously regardless of occupancy or need; no usage monitoring or operational control.",
      "2. Minimal scheduling or regulation of use; limited awareness of water or energy impact.",
      "3. Moderate discipline—ACs turned off manually after use, with some awareness among users.",
      "4. AC operation mostly need-based, with central monitoring or scheduled operation.",
      "5. Strict operation protocols in place; automated controls and strong accountability for water-conscious usage."
    ],
    "Carbon footprint in water-related processes": [
      "1. No measurement or awareness of carbon emissions from water use; no mitigation actions.",
      "2. Minimal recognition of carbon impact; only occasional or reactive actions taken.",
      "3. Carbon footprint is partially measured or estimated; some measures implemented to reduce emissions.",
      "4. Carbon footprint is regularly measured; targeted actions taken to reduce emissions across major water processes.",
      "5. Carbon footprint is actively monitored, fully measured, and systematically minimized through comprehensive strategies."
    ]
  }
};
// Add optional hints here. Use the exact category and field names as keys.
// Leave empty or omit fields that don't need a hint.
const hints = {
  // Example:
  "Sustainable Water Management": {
    "Storage Capacity": "days are in emergency conditions. 2 gallons per person per day."
  }
};

// helper to make safe element ids
function makeId(str) {
  return String(str).replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');
}

// Dynamically render categorized form (modified to use numeric option values)
window.onload = function() {
  const formContainer = document.getElementById("formContainer");

  for (const [categoryName, fields] of Object.entries(categories)) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const heading = document.createElement("h3");
    heading.textContent = categoryName;
    categoryDiv.appendChild(heading);

    for (const [fieldName, options] of Object.entries(fields)) {
      const label = document.createElement("label");
      label.textContent = `${fieldName}:`;
      const safeId = `${makeId(categoryName)}-${makeId(fieldName)}`;
      label.setAttribute("for", safeId);

      // If a hint exists for this indicator, attach it to the label (hover) and add a small info icon.
      const hintText = hints[categoryName] && hints[categoryName][fieldName];
      if (hintText) {
        // set native tooltip on the label
        label.title = hintText;

        // add a visible info icon with the same tooltip
        const info = document.createElement("span");
        info.className = "hint";
        info.textContent = " ℹ";
        info.title = hintText;
        // append the info icon immediately after label text
        label.appendChild(info);
      }

      const select = document.createElement("select");
      select.id = safeId;
      select.dataset.totalOptions = options.length;

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "--Select--";
      select.appendChild(placeholder);

      options.forEach((opt, idx) => {
        const option = document.createElement("option");
        option.value = String(idx + 1);
        option.textContent = opt;
        select.appendChild(option);
      });

      categoryDiv.appendChild(label);
      categoryDiv.appendChild(select);
    }

    formContainer.appendChild(categoryDiv);
  }
};

// Show selected results and compute scores
function showResult() {
  const outputEl = document.getElementById("output");
  let overallSum = 0;
  let overallCount = 0;
  let resultLines = [];

  for (const [categoryName, fields] of Object.entries(categories)) {
    let categorySum = 0;
    let categoryCount = 0;

    for (const fieldName of Object.keys(fields)) {
      const selectId = `${makeId(categoryName)}-${makeId(fieldName)}`;
      const select = document.getElementById(selectId);
      if (!select) {
        outputEl.innerText = "Unexpected error: form element missing.";
        return;
      }
      const val = select.value;
      const totalOptions = Number(select.dataset.totalOptions || 0);

      if (!val) {
        outputEl.innerText = "Please fill all fields before submitting.";
        return;
      }

      const numeric = Number(val);
      const indicatorScore = numeric / totalOptions; // in range (0,1]
      categorySum += indicatorScore;
      categoryCount += 1;
      overallSum += indicatorScore;
      overallCount += 1;
    }

    const categoryAvg = categoryCount > 0 ? (categorySum / categoryCount) : 0;
    // show as fraction and percent
    resultLines.push(`${categoryName}: ${(categoryAvg).toFixed(3)} (${(categoryAvg*100).toFixed(1)}%)`);
  }

  const overallAvg = overallCount > 0 ? (overallSum / overallCount) : 0;
  resultLines.push("");
  resultLines.push(`Overall Water Sensitivity Score: ${(overallAvg).toFixed(3)} (${(overallAvg*100).toFixed(1)}%)`);

  outputEl.innerText = resultLines.join("\n");
}
