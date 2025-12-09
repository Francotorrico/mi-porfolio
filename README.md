# Portfolio

pnpm create-next-app@latest .

Qué significa cada color (todos explicados)
A continuación explico todas las variables, qué representan, y cómo usarlas.

🧩 1. Colores base
Variable	Significa	Usar en	Tailwind class
--background	Fondo global de toda la app	body, layouts, secciones	bg-background
--foreground	Texto principal	textos importantes	text-foreground
--card	Fondo de tarjetas	cards, boxes, secciones	bg-card
--card-foreground	Texto dentro de tarjetas	títulos, descripciones	text-card-foreground
--popover	Fondo de popovers / dropdowns	menús, tooltips, popovers	bg-popover
--popover-foreground	Texto en popovers	contenido dentro del popover	text-popover-foreground
🎯 2. Colores de intención (acciones y estados)
Variable	Uso recomendado	Ejemplo visual
--primary	Acción principal, CTA, botones importantes	bg-primary text-primary-foreground
--primary-foreground	Texto dentro de botones primarios	text-primary-foreground
--secondary	Elementos secundarios	bg-secondary
--secondary-foreground	Texto dentro de secondary	text-secondary-foreground
--accent	Detalles destacados (tags, badges, badges)	bg-accent text-accent-foreground
--accent-foreground	Texto dentro de accent	
--muted	Elementos apagados / low emphasis	bg-muted
--muted-foreground	Texto apagado	text-muted-foreground
--destructive	Acciones peligrosas (Eliminar)	bg-destructive
--destructive-foreground	Texto en botones peligrosos	text-destructive-foreground
🖋 3. Inputs y estructura
Variable	Uso	Tailwind class
--border	Color de bordes	border-border
--input	Fondo de inputs	bg-input
--ring	Focus ring / outline	ring-ring
🧱 4. Sidebar (si tu layout lo usa)
Variable	Uso	Tailwind class
--sidebar-background	Fondo del sidebar	bg-sidebar-background
--sidebar-foreground	Texto	text-sidebar-foreground
--sidebar-primary	Botones del sidebar	bg-sidebar-primary text-sidebar-primary-foreground
--sidebar-primary-foreground	Texto dentro del primary del sidebar	
--sidebar-accent	Items destacados	bg-sidebar-accent
--sidebar-accent-foreground	Texto de items destacados	
--sidebar-border	Bordes del sidebar	border-sidebar-border
--sidebar-ring	Focus ring dentro del sidebar	ring-sidebar-ring



# min-h-screen

Significa altura mínima igual a la altura de la pantalla (100vh en CSS).

Garantiza que el <main> siempre ocupe al menos toda la pantalla, incluso si el contenido es poco.

# 2️⃣ bg-background

Aplica un color de fondo definido en tu configuración de Tailwind (tailwind.config.js), usando la variable --background.

No es un color predeterminado de Tailwind; es personalizado.

# 3️⃣ text-foreground

Aplica un color de texto definido en tu Tailwind, también personalizado (--foreground).

# 4️⃣ px-4

p = padding, x = eje horizontal (izquierda y derecha).

Aplica padding horizontal de 1rem (16px) en móviles por defecto.

# 5️⃣ pt-32

pt = padding-top.

Aplica padding superior de 8rem (128px).

# 6️⃣ sm:px-6

Responsive: a partir del tamaño sm (small, 640px) el padding horizontal será 1.5rem (24px).

# 7️⃣ lg:px-8

Responsive: a partir del tamaño lg (large, 1024px) el padding horizontal será 2rem (32px).