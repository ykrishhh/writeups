export interface TrendingRepo {
  name: string;
  url: string;
  desc: string;
  topic: string;
  source: "github" | "web";
}

// Curated snapshot of external security repos worth watching.
// Not runtime-fetched: maintained by hand from web research so the page stays static.
// Last refreshed: 2026-07-19
export const trending: TrendingRepo[] = [
  {
    name: "usestrix/strix",
    url: "https://github.com/usestrix/strix",
    desc: "AI-native penetration testing platform that plans and runs engagements end to end.",
    topic: "AI pentest",
    source: "web",
  },
  {
    name: "vxcontrol/pentagi",
    url: "https://github.com/vxcontrol/pentagi",
    desc: "Multi-agent framework for autonomous penetration testing across the full kill chain.",
    topic: "AI pentest",
    source: "web",
  },
  {
    name: "inevitable-lettus/esp32-rf-security-toolkit",
    url: "https://github.com/inevitable-lettus/esp32-rf-security-toolkit",
    desc: "ESP32-based toolkit for sub-GHz and BLE RF analysis and replay.",
    topic: "ESP32 / RF",
    source: "web",
  },
  {
    name: "samugit83/redamon",
    url: "https://github.com/samugit83/redamon",
    desc: "AI red teaming agent that chains recon, exploitation, and reporting.",
    topic: "AI red team",
    source: "web",
  },
  {
    name: "spinov001-art/awesome-security-tools-2026",
    url: "https://github.com/spinov001-art/awesome-security-tools-2026",
    desc: "Curated list of current security tooling, refreshed for 2026.",
    topic: "Curated list",
    source: "web",
  },
  {
    name: "projectdiscovery/nuclei",
    url: "https://github.com/projectdiscovery/nuclei",
    desc: "Fast, template-driven scanner for surfacing known vulnerabilities across targets.",
    topic: "Scanning",
    source: "web",
  },
  {
    name: "sqlmapproject/sqlmap",
    url: "https://github.com/sqlmapproject/sqlmap",
    desc: "Automatic SQL injection detection and takeover utility. Still the reference tool.",
    topic: "Web",
    source: "web",
  },
  {
    name: "ffuf/ffuf",
    url: "https://github.com/ffuf/ffuf",
    desc: "Fast web fuzzer for directories, parameters, and virtual hosts.",
    topic: "Web",
    source: "web",
  },
  {
    name: "OJ/gobuster",
    url: "https://github.com/OJ/gobuster",
    desc: "CLI brute-forcing tool for URIs, DNS, and vhost discovery.",
    topic: "Recon",
    source: "web",
  },
  {
    name: "nmap/nmap",
    url: "https://github.com/nmap/nmap",
    desc: "Network discovery and port scanning. The baseline everything else builds on.",
    topic: "Recon",
    source: "web",
  },
];
