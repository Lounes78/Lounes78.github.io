import { z } from 'zod';

const linkSchema = z.object({
  label: z.string(),
  href: z.url(),
});

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
  detail: z.string(),
});

const experienceSchema = z.object({
  id: z.string(),
  role: z.string(),
  organization: z.string(),
  organizationUrl: z.url().optional(),
  location: z.string(),
  period: z.string(),
  summary: z.string(),
  bullets: z.array(z.string()).min(1),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
});

const mediaSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string(),
  }),
  z.object({
    type: z.literal('video'),
    src: z.string(),
    poster: z.string(),
    alt: z.string(),
  }),
  z.object({
    type: z.literal('system'),
    variant: z.enum(['speech', 'compute', 'audio']),
    alt: z.string(),
  }),
]);

const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortTitle: z.string(),
  eyebrow: z.string(),
  period: z.string(),
  summary: z.string(),
  problem: z.string(),
  role: z.string(),
  constraints: z.array(z.string()).min(1),
  decisions: z.array(z.string()).min(1),
  contributions: z.array(z.string()).min(1),
  results: z.array(z.string()).min(1),
  limitations: z.array(z.string()).min(1),
  lessons: z.array(z.string()).min(1),
  technologies: z.array(z.string()).min(1),
  links: z.array(linkSchema),
  media: mediaSchema,
  accent: z.enum(['cyan', 'violet', 'amber', 'mint']),
  featuredTechnical: z.boolean(),
  featuredShowcase: z.boolean(),
  archive: z.boolean().default(false),
  status: z.string(),
  evidenceNote: z.string(),
  lastFactCheck: z.string(),
  publicApproved: z.boolean(),
});

const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string(),
  period: z.string(),
  note: z.string().optional(),
});

const skillGroupSchema = z.object({
  name: z.string(),
  description: z.string(),
  items: z.array(z.string()).min(1),
});

const siteSchema = z.object({
  profile: z.object({
    name: z.string(),
    givenName: z.string(),
    familyName: z.string(),
    title: z.string(),
    specialization: z.string(),
    currentStatus: z.string(),
    introduction: z.string(),
    location: z.string(),
    email: z.email(),
    github: z.url(),
    linkedin: z.url(),
    cv: z.string(),
  }),
  metrics: z.array(metricSchema),
  experiences: z.array(experienceSchema),
  projects: z.array(projectSchema),
  education: z.array(educationSchema),
  skills: z.array(skillGroupSchema),
  languages: z.array(z.string()),
  activities: z.array(z.string()),
});

export const site = siteSchema.parse({
  profile: {
    name: 'Lounes Benali',
    givenName: 'Lounes',
    familyName: 'Benali',
    title: 'Speech AI & ML Systems Engineer',
    specialization: 'Speech & Multimodal AI · Large-Scale Training & Inference',
    currentStatus:
      'Completing an end-of-study Speech AI research internship at the Institute of Foundation Models, MBZUAI, through August 2026.',
    introduction:
      'I build multilingual speech models and large-scale training and inference systems across data curation, distributed GPU workloads, rigorous evaluation, and real-time multimodal products.',
    location: 'Paris, France',
    email: 'lounesbenali.2@gmail.com',
    github: 'https://github.com/B-Lounes',
    linkedin: 'https://www.linkedin.com/in/lounes-benali-b0b022209/',
    cv: '/cv/Lounes-Benali-CV.pdf',
  },
  metrics: [
    {
      value: '220M',
      label: 'speech segments curated',
      detail: 'A multi-model filtering pipeline spanning roughly one million hours of source audio.',
    },
    {
      value: '256',
      label: 'GPUs for distributed training',
      detail: 'Multi-node Slurm training across AMD MI210 and NVIDIA H200 infrastructure.',
    },
    {
      value: '1,440',
      label: 'MI210 GPUs for inference',
      detail: 'Fault-tolerant inference with health monitoring, checkpointing, and automatic recovery.',
    },
    {
      value: '9,668×',
      label: 'real-time GPU VAD',
      detail: 'All 32,794 CPU-reference boundaries reproduced within a 10 ms tolerance.',
    },
  ],
  experiences: [
    {
      id: 'ifm',
      role: 'Speech AI Research Intern',
      organization: 'Institute of Foundation Models, MBZUAI',
      organizationUrl: 'https://ifm.ai/',
      location: 'Paris, France',
      period: 'Feb 2026 — Aug 2026',
      summary:
        'Core contributor in a four-person speech team developing multilingual ASR centered on Arabic dialects, spanning data, training, evaluation, and GPU-scale inference.',
      bullets: [
        'Co-developed a multilingual ASR checkpoint with the best CER and third-best WER on a dated public Open Universal ASR leaderboard snapshot, while supporting diacritization, dialect identification, and multilingual code-switching.',
        'Built a multi-model curation pipeline over 220 million segments and distilled approximately one million hours into a stringent 17,000-hour training corpus.',
        'Scaled Slurm workflows to 256 GPUs for training and 1,440 AMD MI210 GPUs for fault-tolerant inference across ROCm and CUDA environments.',
        'Reimplemented a production Kaldi/FSMN VAD path as batched GPU operations, reaching 9,668× real time on eight MI210 GPUs while reproducing all 32,794 reference boundaries within 10 ms.',
      ],
      tags: ['Multilingual ASR', 'PyTorch', 'Slurm', 'ROCm', 'CUDA', 'vLLM', 'k2'],
      featured: true,
    },
    {
      id: 'ampere',
      role: 'Deep Learning Engineer · Apprentice',
      organization: 'Ampere Software Technology · Renault Group',
      location: 'Guyancourt, France',
      period: 'Sep 2024 — Feb 2026',
      summary:
        'Applied R&D across text-to-speech, speech-to-speech, streaming inference, and production deployment.',
      bullets: [
        'Developed and fine-tuned text-to-speech and speech-to-speech systems within an applied R&D team.',
        'Built an internal inference platform serving multiple fine-tuned models, voices, versions, and languages to several teams.',
        'Worked across the complete lifecycle: dataset generation, collection, processing, fine-tuning implementation, compression, acceleration, latency optimization, and deployment.',
      ],
      tags: ['TTS', 'Speech-to-speech', 'Streaming', 'Model optimization', 'Deployment'],
      featured: true,
    },
    {
      id: 'olympics',
      role: 'Technical Staff · Paris 2024',
      organization: 'International Broadcast Center',
      location: 'Le Bourget, France',
      period: 'May 2024 — Sep 2024',
      summary:
        'Supported reliable broadcast operations through networked-device deployment and endpoint troubleshooting.',
      bullets: [
        'Deployed and configured computers, monitors, printers, and other networked devices on the IBC LAN.',
        'Diagnosed network and endpoint issues during daily broadcast operations.',
      ],
      tags: ['Networking', 'Operations', 'Troubleshooting'],
      featured: false,
    },
    {
      id: 'schneider',
      role: 'Engineering Intern',
      organization: 'Schneider Electric',
      location: 'Cheraga, Algeria',
      period: 'Jul 2023',
      summary:
        'Studied variable-frequency-drive architectures and ML-based control opportunities.',
      bullets: [
        'Explored variable-frequency-drive control architectures and opportunities for machine-learning-assisted optimization.',
      ],
      tags: ['Control systems', 'Power electronics'],
      featured: false,
    },
  ],
  projects: [
    {
      slug: 'multilingual-asr-systems',
      title: 'Multilingual ASR at foundation-model scale',
      shortTitle: 'Multilingual ASR',
      eyebrow: 'Research engineering · IFM / MBZUAI',
      period: '2026',
      summary:
        'An Arabic-centered multilingual speech program connecting large-scale data curation, self-supervised learning, distributed training, and rigorous dialect-aware evaluation.',
      problem:
        'Build a multilingual recognizer that handles Arabic dialects, diacritized transcription, dialect identification, and code-switching without treating data preparation and infrastructure as separate concerns.',
      role:
        'Core contributor in a four-person speech team, working from collection and filtering through training, evaluation, and inference.',
      constraints: [
        'Roughly one million hours of noisy, heterogeneous source audio and 220 million candidate segments.',
        'Nineteen-dialect evaluation, diacritized text, code-switching, and highly uneven language coverage.',
        'Multi-node training across AMD MI210 and NVIDIA H200 clusters.',
      ],
      decisions: [
        'Treat data quality, dialect coverage, and systems reliability as one training-system problem.',
        'Combine several independent quality signals instead of accepting a single ASR confidence score.',
        'Keep the evaluation set balanced by dialect so aggregate scores do not hide weak varieties.',
      ],
      contributions: [
        'Built collection and curation infrastructure spanning millions of source hours and 220 million candidate segments.',
        'Combined dialect identification, quality signals, ASR hypotheses, and token confidence to distill a 17,000-hour training corpus.',
        'Ran self-supervised VietASR pretraining, iterative k-means pseudo-labeling, and low-resource fine-tuning across a balanced 19-dialect evaluation set.',
        'Operated multi-node Slurm workloads across AMD MI210 and NVIDIA H200 clusters.',
      ],
      results: [
        'First checkpoint reached best CER and third-best WER on a public leaderboard snapshot, within two WER points of the leaders.',
        'Distributed training scaled to 256 GPUs with reproducible checkpoint and recovery workflows.',
        'The model supports diacritization, dialect identification, and code-switching across Arabic, French, English, Spanish, and other languages.',
      ],
      limitations: [
        'The program is ongoing through August 2026; model names, the exact leaderboard snapshot, and additional ablations are not yet public.',
      ],
      lessons: [
        'At this scale, corpus design and recoverable infrastructure can move model quality as much as architecture changes.',
      ],
      technologies: ['ASR', 'PyTorch', 'Speech SSL', 'Slurm', 'WebDataset', 'WER / CER'],
      links: [
        { label: 'IFM / MBZUAI', href: 'https://ifm.ai/' },
      ],
      media: {
        type: 'system',
        variant: 'speech',
        alt: 'Speech-data pipeline from raw audio through curation, training, and evaluation',
      },
      accent: 'cyan',
      featuredTechnical: true,
      featuredShowcase: false,
      archive: false,
      status: 'Current research',
      evidenceNote: 'Metrics and scope were reconciled with the updated two-page CV supplied on 18 July 2026.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'gpu-speech-infrastructure',
      title: 'GPU-scale speech infrastructure across ROCm and CUDA',
      shortTitle: 'GPU Speech Systems',
      eyebrow: 'ML systems · Distributed compute',
      period: '2026',
      summary:
        'Porting and operating speech training and inference stacks across heterogeneous accelerators, from native ROCm builds to fault-tolerant thousand-GPU inference.',
      problem:
        'Make CUDA-oriented speech software reliable on AMD accelerators while preserving numerical behavior, operational recovery, and useful Python interfaces.',
      role:
        'Owned infrastructure and porting work across vLLM, k2, VAD execution, Slurm orchestration, and validation.',
      constraints: [
        'CUDA-oriented dependencies had to run reliably on AMD MI210 hardware without losing expected behavior.',
        'Long-running jobs at thousand-GPU scale required checkpointing and recovery rather than optimistic restarts.',
        'The GPU VAD implementation had to preserve CPU-reference timing within a strict 10 ms boundary tolerance.',
      ],
      decisions: [
        'Validate ports with behavior and boundary equivalence, not compilation success alone.',
        'Convert sequential VAD work into batched tensor operations while preserving the production state-machine semantics.',
        'Make health checks, resumability, and automatic recovery part of the inference design.',
      ],
      contributions: [
        'Built a native vLLM environment for ROCm and patched multimodal audio execution paths.',
        'Resolved k2 GPU ragged-label failures and created an experimental HIP/ROCm port validated on MI210 hardware.',
        'Reimplemented a production Kaldi/FSMN VAD path as batched GPU operations.',
        'Added checkpoint/resume, health monitoring, and automatic recovery to distributed inference workloads.',
      ],
      results: [
        'Launched fault-tolerant inference across 1,440 MI210 GPUs.',
        'Reached 9,668× real time for VAD on eight MI210 GPUs.',
        'Reproduced all 32,794 CPU-reference boundaries within 10 ms.',
      ],
      limitations: [
        'The public case study omits internal cluster topology, datasets, and operational details; the k2 ROCm work is experimental.',
      ],
      lessons: [
        'Accelerator portability is a numerical-validation and operations problem, not only a compiler-porting task.',
      ],
      technologies: ['ROCm / HIP', 'CUDA', 'vLLM', 'k2', 'Slurm', 'PyTorch'],
      links: [
        { label: 'k2 ROCm port', href: 'https://github.com/B-Lounes/k2-rocm' },
      ],
      media: {
        type: 'system',
        variant: 'compute',
        alt: 'Distributed GPU topology connecting scheduler, worker nodes, monitoring, and checkpoints',
      },
      accent: 'violet',
      featuredTechnical: true,
      featuredShowcase: true,
      archive: false,
      status: 'Research engineering',
      evidenceNote: 'Public evidence includes the linked k2 ROCm repository; scale and VAD measurements come from the updated CV.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'seenitt',
      title: 'Seenitt — streaming visual AI for smart glasses',
      shortTitle: 'Seenitt',
      eyebrow: 'MentraOS grant · Edge vision',
      period: '2025 — 2026',
      summary:
        'A low-latency visual assistant that decodes a live H.264 glasses feed, segments a physical chessboard and pieces, tracks geometry, and returns stable FEN updates with Stockfish suggestions.',
      problem:
        'Turn a moving, imperfect first-person camera stream into stable, structured board state without running the full vision pipeline on every frame.',
      role:
        'Designed the Python streaming backend, vision pipeline, GPU inference path, tracking logic, and chess-state stabilization.',
      constraints: [
        'A moving first-person camera produces blur, perspective changes, occlusion, and unstable lighting.',
        'Full segmentation and geometric reconstruction are too expensive to repeat on every video frame.',
        'Chess state must remain stable enough to avoid emitting contradictory FEN updates.',
      ],
      decisions: [
        'Reuse the vision encoder output for board and piece masks within each frame.',
        'Track 81 reconstructed grid intersections between expensive segmentation passes.',
        'Fall back to full reconstruction when optical-flow confidence fails instead of allowing tracking error to accumulate.',
      ],
      contributions: [
        'Built a WebSocket backend that decodes live H.264 camera feeds and returns structured results to the glasses client.',
        'Used SAM 3 to segment the board and pieces, reconstruct a 9×9 grid, and infer FEN positions.',
        'Cached prompts and reused each frame’s vision-encoder output across board and piece segmentation.',
        'Ran geometric reconstruction while GPU masks decoded, then tracked all 81 grid intersections with Lucas–Kanade optical flow.',
      ],
      results: [
        'Received a MentraOS developer grant.',
        'Reduced expensive full-grid reconstruction to tracking-failure events.',
        'Established a reusable streaming platform for chess, plant-identification, and Blackjack prototypes.',
      ],
      limitations: [
        'Chess is the implemented reference application; plant identification and Blackjack remain prototypes, and end-to-end latency is not yet published.',
      ],
      lessons: [
        'Combining occasional semantic inference with inexpensive geometric tracking is a practical pattern for wearable vision.',
      ],
      technologies: ['Python', 'SAM 3', 'TensorRT', 'PyCUDA', 'OpenCV', 'WebSockets'],
      links: [
        { label: 'Source', href: 'https://github.com/B-Lounes/Seenitt' },
        { label: 'Mentra', href: 'https://mentraglass.com/' },
      ],
      media: {
        type: 'image',
        src: '/media/seenitt-chess.webp',
        alt: 'Seenitt detecting a chessboard grid and colored pieces from a smart-glasses camera',
      },
      accent: 'amber',
      featuredTechnical: true,
      featuredShowcase: true,
      archive: false,
      status: 'Active development',
      evidenceNote: 'Architecture and implementation are represented in the linked public repository; grant status is stated in the supplied CV.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'synthetic-speech-data',
      title: 'Conversational AI and synthetic speech datasets',
      shortTitle: 'Synthetic Speech',
      eyebrow: 'Speech data · Real-time audio',
      period: '2025',
      summary:
        'A modular platform orchestrating multi-agent voice conversations and exporting aligned, speaker-separated training data for TTS and speech-to-speech post-training.',
      problem:
        'Generate natural multi-speaker conversations while retaining exact channel separation, turn timing, transcripts, and recovery from long-running connection failures.',
      role:
        'Designed the orchestration, real-time audio routing, resilience logic, and aligned export format.',
      constraints: [
        'Bidirectional real-time audio must preserve speaker identity and exact timing across long-running sessions.',
        'Provider disconnects and partial sessions cannot corrupt already generated dataset artifacts.',
      ],
      decisions: [
        'Keep one PCM channel per agent and assemble aligned exports only from timestamped events.',
        'Separate provider adapters from conversation orchestration and dataset serialization.',
        'Recover connections and resume workers with explicit state rather than hiding failures.',
      ],
      contributions: [
        'Routed cross-agent audio through speaker-separated 16-bit PCM streams at 24 kHz.',
        'Built retries, connection recovery, and long-running worker orchestration.',
        'Exported aligned transcripts, per-speaker channels, turn-taking annotations, and metadata.',
      ],
      results: [
        'Produced a reusable data contract for TTS and speech-to-speech post-training.',
        'Separated model/provider integration from audio routing and dataset export.',
      ],
      limitations: [
        'Dataset volume and production success-rate measurements are intentionally omitted until a reproducible public run is available.',
      ],
      lessons: [
        'A precise event and audio contract makes a multi-agent demo useful as a repeatable data-generation system.',
      ],
      technologies: ['Python', 'TypeScript', 'PCM audio', 'WebSockets', 'Event-driven systems'],
      links: [],
      media: {
        type: 'system',
        variant: 'audio',
        alt: 'Two voice agents exchanging audio while producing aligned speaker channels and transcripts',
      },
      accent: 'mint',
      featuredTechnical: true,
      featuredShowcase: true,
      archive: false,
      status: 'Personal engineering project',
      evidenceNote: 'The case study describes a personal project; no private dataset contents or provider credentials are exposed.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'ampere-speech-platform',
      title: 'Real-time TTS and speech-to-speech systems',
      shortTitle: 'TTS Platform',
      eyebrow: 'Applied R&D · Ampere / Renault Group',
      period: '2024 — 2026',
      summary:
        'An end-to-end speech engineering chapter spanning data generation, fine-tuning, model compression, streaming inference, latency optimization, and internal deployment.',
      problem:
        'Serve multiple evolving speech models, voices, versions, and languages through one reliable real-time inference surface.',
      role:
        'Deep Learning Engineer apprentice working across the complete model and deployment lifecycle.',
      constraints: [
        'Multiple models, voices, versions, and languages had to share one inference surface.',
        'Real-time interaction required balancing model quality, latency, compression, and operational reliability.',
        'Employer confidentiality limits architecture diagrams and quantitative production details.',
      ],
      decisions: [
        'Design the serving layer around versioned model and voice contracts instead of a single checkpoint.',
        'Treat streaming, acceleration, and deployment as first-class parts of model development.',
      ],
      contributions: [
        'Developed and fine-tuned TTS and speech-to-speech systems.',
        'Built an internal multi-model, multi-voice, multilingual inference platform.',
        'Implemented real-time streaming, compression, acceleration, and latency optimization.',
      ],
      results: [
        'Created a shared inference surface used by several internal teams.',
        'Connected research iteration with production deployment requirements.',
      ],
      limitations: [
        'Only public-safe scope is shown; proprietary model names, screenshots, datasets, and internal performance figures are excluded.',
      ],
      lessons: [
        'Speech research becomes a reusable product capability when data, model, runtime, and interface decisions evolve together.',
      ],
      technologies: ['TTS', 'Speech-to-speech', 'PyTorch', 'Streaming inference', 'Model optimization'],
      links: [],
      media: {
        type: 'system',
        variant: 'audio',
        alt: 'Speech model lifecycle from datasets and fine-tuning to optimized streaming inference',
      },
      accent: 'cyan',
      featuredTechnical: false,
      featuredShowcase: false,
      archive: false,
      status: 'Professional experience',
      evidenceNote: 'Public-safe responsibilities are reconciled with the updated CV; confidential details are deliberately excluded.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'hume-voice-integration',
      title: 'Real-time automotive voice and tool integration',
      shortTitle: 'Hume Voice',
      eyebrow: 'Android · Streaming voice',
      period: '2025',
      summary:
        'A Kotlin Android integration for Hume EVI with low-latency audio streaming, interruption handling, emotion data, and tool-call responses.',
      problem:
        'Create a natural voice interaction loop on Android that can stream bidirectional audio and translate model tool calls into product actions.',
      role:
        'Implemented the Android client, WebSocket protocol, audio lifecycle, interruption handling, and tool-response flow.',
      constraints: [
        'Input and output audio use different sample rates and must remain responsive across Android lifecycle events.',
        'Interruptions and tool calls can arrive while audio is still playing or the connection is recovering.',
      ],
      decisions: [
        'Separate audio capture/playback, protocol messages, and product-level tool actions.',
        'Make interruption and lifecycle recovery explicit state transitions.',
      ],
      contributions: [
        'Built bidirectional 16 kHz input / 48 kHz output audio streaming.',
        'Added natural interruption handling, tool calls, session configuration, and lifecycle recovery.',
        'Separated high-level EVI behavior from WebSocket, audio, and data-model layers.',
      ],
      results: [
        'Produced a reusable Kotlin integration with full protocol and tool-call support.',
        'Demonstrated responsive voice control in an automotive prototype.',
      ],
      limitations: [
        'This is a prototype integration, not a production vehicle-control system; the public demo is the evidence boundary.',
      ],
      lessons: [
        'A thin protocol boundary makes real-time voice behavior easier to test and reuse across product actions.',
      ],
      technologies: ['Kotlin', 'Android', 'WebSockets', 'Streaming audio', 'Tool calling'],
      links: [
        { label: 'Source', href: 'https://github.com/B-Lounes/hume-kotlin' },
      ],
      media: {
        type: 'video',
        src: '/media/hume-voice-demo.mp4',
        poster: '/media/hume-voice-poster.webp',
        alt: 'Demonstration of the Hume voice assistant issuing an automotive tool call',
      },
      accent: 'violet',
      featuredTechnical: false,
      featuredShowcase: true,
      archive: false,
      status: 'Prototype',
      evidenceNote: 'Evidence is limited to the linked source repository and public demo video.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'vehicle-pose-estimation',
      title: '6-DoF vehicle pose estimation',
      shortTitle: 'Vehicle Pose',
      eyebrow: 'Computer vision · Research project',
      period: '2025',
      summary:
        'An hourglass CenterNet pipeline for vehicle orientation and position estimation with robust augmentation, test-time inference, blending, calibration, and error analysis.',
      problem:
        'Estimate six-degree-of-freedom vehicle pose under perspective, lighting, and camera variations.',
      role:
        'Implemented the deep-learning and camera-geometry pipeline with quantitative evaluation.',
      constraints: [
        'Perspective, lighting, camera orientation, and occlusion all affect pose estimates.',
      ],
      decisions: [
        'Combine learned keypoint prediction with explicit calibration and projective geometry.',
      ],
      contributions: [
        'Implemented perspective, camera-rotation, and color augmentation.',
        'Combined pose regression with camera calibration, homography, and visual tracking.',
      ],
      results: [
        'Built a complete training, inference, post-processing, and error-analysis workflow.',
      ],
      limitations: [
        'The archived academic project does not publish a current benchmark or deployment claim.',
      ],
      lessons: [
        'Geometry-aware augmentation and error analysis are as important as the regressor architecture.',
      ],
      technologies: ['PyTorch', 'CenterNet', 'OpenCV', 'MATLAB'],
      links: [],
      media: {
        type: 'image',
        src: '/media/vehicle-pose.webp',
        alt: 'CenterNet architecture and colored vehicle-pose predictions on a street scene',
      },
      accent: 'mint',
      featuredTechnical: false,
      featuredShowcase: false,
      archive: true,
      status: 'Academic project',
      evidenceNote: 'Archived coursework summary with a representative result image.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'cordic-fpga',
      title: 'CORDIC accelerator on FPGA',
      shortTitle: 'CORDIC FPGA',
      eyebrow: 'Digital hardware · VHDL',
      period: '2023',
      summary:
        'A VHDL implementation of the CORDIC algorithm on a Digilent Nexys 2 / Xilinx Spartan-3E FPGA.',
      problem:
        'Compute trigonometric functions efficiently with shift-add hardware rather than general multiplication.',
      role:
        'Designed, implemented, and demonstrated the accelerator.',
      constraints: [
        'Trigonometric functions had to be expressed with the limited arithmetic resources of a Spartan-3E FPGA.',
      ],
      decisions: [
        'Use the iterative shift-add CORDIC method with a dedicated datapath and controller.',
      ],
      contributions: [
        'Implemented the CORDIC datapath and control in VHDL.',
        'Validated the design on a physical Nexys 2 development board.',
      ],
      results: [
        'Earned the highest project grade.',
      ],
      limitations: [
        'This is a teaching-scale accelerator on legacy hardware, not a comparative modern FPGA benchmark.',
      ],
      lessons: [
        'Algorithm structure and hardware structure must be designed together when multipliers are scarce.',
      ],
      technologies: ['VHDL', 'FPGA', 'Xilinx Spartan-3E'],
      links: [
        { label: 'Source', href: 'https://github.com/B-Lounes/CORDIC-VHDL-NEXYS2' },
      ],
      media: {
        type: 'video',
        src: '/media/cordic-demo.mp4',
        poster: '/media/cordic-poster.webp',
        alt: 'CORDIC implementation running on a Nexys 2 FPGA board',
      },
      accent: 'amber',
      featuredTechnical: false,
      featuredShowcase: false,
      archive: true,
      status: 'Academic project',
      evidenceNote: 'The linked repository and embedded board demonstration provide the public evidence.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
    {
      slug: 'power-systems-optimization',
      title: 'Railway power-systems optimization',
      shortTitle: 'NSGA-II Optimization',
      eyebrow: 'Optimization · Energy systems',
      period: '2024',
      summary:
        'Multi-objective railway power design using NSGA-II and Monte Carlo simulation to compare battery capacity, power thresholds, and voltage-drop trade-offs.',
      problem:
        'Find useful Pareto-optimal power-system configurations across competing cost and electrical constraints.',
      role:
        'Implemented the simulation, optimization, and result-analysis workflow.',
      constraints: [
        'Battery capacity, power thresholds, cost, and voltage-drop objectives compete rather than collapse into one optimum.',
      ],
      decisions: [
        'Use NSGA-II and Monte Carlo evaluation to expose trade-offs as a Pareto front.',
      ],
      contributions: [
        'Modeled battery capacity, power thresholds, and voltage drops.',
        'Built Monte Carlo evaluation and Pareto-front analysis.',
      ],
      results: [
        'Produced a decision surface comparing dominated and non-dominated system designs.',
      ],
      limitations: [
        'Results belong to the modeled academic scenario and should not be read as a deployed railway design.',
      ],
      lessons: [
        'A visual Pareto surface supports engineering decisions better than a single weighted score.',
      ],
      technologies: ['Python', 'NSGA-II', 'Monte Carlo', 'Pymoo'],
      links: [
        { label: 'Source', href: 'https://github.com/B-Lounes/Opti_gen_NSGA2' },
      ],
      media: {
        type: 'image',
        src: '/media/nsga-pareto.webp',
        alt: 'Pareto plot comparing dominated and non-dominated battery and voltage-drop configurations',
      },
      accent: 'cyan',
      featuredTechnical: false,
      featuredShowcase: false,
      archive: true,
      status: 'Academic project',
      evidenceNote: 'The linked source repository and Pareto visualization document the academic project.',
      lastFactCheck: '2026-07-18',
      publicApproved: true,
    },
  ],
  education: [
    {
      degree: "Master's in Intelligent Systems Engineering",
      institution: 'Sorbonne University',
      location: 'Paris, France',
      period: 'Sep 2024 — Present',
      note: 'Final-year program; official completion status to be updated after August 2026.',
    },
    {
      degree: "Bachelor's in Electrical Engineering and Computer Science",
      institution: 'Paris-Saclay University',
      location: 'Paris, France',
      period: 'Sep 2023 — May 2024',
      note: 'Graduated top of the class.',
    },
    {
      degree: 'Engineering Cycle · Electronics Engineering and Computer Science',
      institution: 'École Nationale Polytechnique (ENP)',
      location: 'Algiers, Algeria',
      period: 'Sep 2022 — Jun 2023',
    },
    {
      degree: 'Preparatory Classes in Science and Technology',
      institution: 'National competitive-exam program',
      location: 'Algeria',
      period: 'Sep 2020 — Jun 2022',
      note: 'Ranked 29th of 1,576 candidates in the national engineering-school entrance examination.',
    },
  ],
  skills: [
    {
      name: 'Speech AI',
      description: 'Modeling, data, and evaluation across recognition and generation.',
      items: ['ASR', 'TTS', 'Speech-to-speech', 'Speech SSL', 'k2', 'WER / CER'],
    },
    {
      name: 'Distributed ML',
      description: 'Training and inference at multi-node and multi-accelerator scale.',
      items: ['Slurm', 'DDP', 'FSDP', 'vLLM', 'Checkpointing', 'Fault recovery'],
    },
    {
      name: 'Accelerators',
      description: 'Heterogeneous GPU systems and low-latency execution.',
      items: ['AMD MI210 / ROCm', 'NVIDIA H200 / CUDA', 'TensorRT', 'ONNX Runtime', 'Quantization'],
    },
    {
      name: 'Vision & edge',
      description: 'Streaming vision, geometry, tracking, and real-time inference.',
      items: ['SAM 3', 'OpenCV', 'YOLO', 'PyCUDA', 'Optical flow'],
    },
    {
      name: 'Data & systems',
      description: 'Production-oriented data formats, services, and tooling.',
      items: ['PostgreSQL', 'DuckDB', 'Parquet', 'WebDataset', 'Docker', 'REST', 'WebSockets'],
    },
    {
      name: 'Programming',
      description: 'Languages used across research, product, and hardware.',
      items: ['Python', 'C', 'C++', 'TypeScript', 'Kotlin', 'MATLAB', 'VHDL'],
    },
  ],
  languages: ['Berber · native', 'French · DALF C2', 'English · fluent', 'Arabic · fluent'],
  activities: [
    'IT member · IEEE Student Branch',
    'Micromouse team lead · École Nationale Polytechnique (ENP)',
  ],
});

export type SiteData = z.infer<typeof siteSchema>;
export type Project = SiteData['projects'][number];
export type Experience = SiteData['experiences'][number];

export const technicalProjects = site.projects.filter((project) => project.featuredTechnical);
export const showcaseProjects = site.projects.filter((project) => project.featuredShowcase);
export const archivedProjects = site.projects.filter((project) => project.archive);

export function getProject(slug: string) {
  return site.projects.find((project) => project.slug === slug);
}
