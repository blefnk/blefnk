---
title: "my way: package managers (npm, yarn, pnpm, bun, dler)"
description: "a tale of frustration, speed, trust, and finally dler. an overview of my journey from npm through yarn, pnpm, and bun to dler."
---

## 2010: the beginning

> index.php — index.html — styles.css

my first lines of code.
so nostalgic. so simple.

but this isn't about those early days.
and not yet about my wordpress era since 2014.
that's for another post.

today's article is about package managers.
a story of upgrades, rage quits, experiments, and eventually — doing it my way.

## 2017: npm

> i said hello to react. learned more about js.

my first `npm install` felt like magic.
dependencies? handled. scripts? automated.
chaos? sort of contained.

but also:

* package-lock.json merge hell (you know the drill)
* install speeds measured in coffee breaks (seriously, time for a whole pot)
* random bugs from left-pad disappearances (we all remember that day)
* strange messages about "peer dependencies" and other cryptic warnings
* breaking changes in major updates... or minor ones... or patch ones (who knows anymore?)

npm worked, until it didn't.
and when it broke, it broke spectacularly.

then — came yarn.

## 2019: yarn

> npm, but ✨cool✨.

yarn felt like a revolution.
lockfiles that actually made sense.
speed that didn't make you question your life choices.
offline cache. no more weird bugs (well... fewer weird bugs).

add a package? done.
install? faster.
install again? **even faster**.

for a while, yarn was *the* answer.
until it wasn't.

the romance faded when yarn v2 hit.
zero-install was... weird.
plug'n'play broke half my tooling.
yarn v2... v3... 🫤

i needed more power. more consistency. more control.
something that wouldn't reinvent itself every year.

and so...

## 2021: pnpm

> i found my love in node. pnpm was **everything** (it seemed so, at least).

the one with the nested folders and speed steroids.
the first one that felt like a *real* package manager.

this was when everything clicked.
pnpm introduced me to monorepos.
pnpm made me fall in love with next.js.
pnpm felt like the power-user tool i'd been waiting for.

* symlinks that actually worked
* content-addressable storage (fancy, but brilliant)
* rock-solid monorepo support
* better deduplication than anything before
* no more accidental installs in the wrong directory

but it came with rough edges.
dependency resolution sometimes felt... alien.
custom scripts needed tweaks.
setup felt heavier than it should've been.
`pnpm update --latest`... worked strangely in monorepos.

still — pnpm raised the bar. like — a huge one.
it showed me what package managers could be.

but the story doesn't end there.

## 2024: bun

> the beast that changed everything.

bun didn't just enter the scene — it **exploded** onto it.
node, npm, bundler, test runner — **all in one**. and *fast*. like... really fast.

i watched projects drop build times from 30s to 3s.
dependencies installed before you could blink.
esm compatibility? finally good.
zero config? actually zero.
v8 startup perf? unmatched.
native ts support? yes please.

bun was the first time i felt like someone *got it*.
speed matters. developer experience matters.
tools should get out of your way.

but.
(there's always a but, isn't there?)

`bun update --latest`... still worked strangely in monorepos. yeah, i love living on the edge.
vercel and next.js still don't have native support for it in 2025.
some edge cases with complex dependencies.

bun was *almost* perfect.
but i wanted bun's speed with my flexibility.
my control.
my vision.

so...

## 2025: dler

> my own way. my own package manager. not a replacement. a **layer above**. a *dealer* of package managers.

`@reliverse/dler` (/ˈdiː.lər/) is what happened when i got tired of compromising.
it's a unified package manager built for modern typescript/javascript workflows.
it wraps **bun**, **pnpm**, **yarn**, and **npm** into one consistent, powerful cli & sdk.

but here's the thing — it goes *way* beyond package installs.

dler fits perfectly into those stories where you try to build one thing—and accidentally find yourself building something else. something unexpected. something beautiful.
it started as a humble `.ts` wrapper over bun.build. a single file. simple. harmless.
and then—somewhere between *“what if i integrate unbuild’s codebase?”* and *“why do i need a package.json for every lib, and why is it so hard to set up?”*—it quietly became a wrapper over all package managers.
classic dev story: oven meets bun, bun meets wrapper, wrapper becomes sentient.

### what makes `dler` different?

it's not just about installing deps.
it's about **managing codebases** at scale.
with *joy*, *speed*, and *no surprises*.

some of my favorite magic:

* ✅ **built-in bundling** ([bun](https://bun.sh/docs/bundler), [mkdist](https://github.com/unjs/mkdist#readme), [jsr](https://jsr.io) 😘, etc.)
* ✅ **publishing toolkit** with semantic versioning that doesn't suck
* ✅ **monorepo-ready** (via experimental `libs` command)
* ✅ **index file generation** – aggregate exports from source
* ✅ **codemods**: built-in code transformations
* ✅ **typescript alias resolution** (turns `~/*` into real paths automagically)
* ✅ **zero-config builds** with smart defaults
* ✅ **dual interface**: cli + programmable sdk
* ✅ **magic spell system** (yes, really)
* ✅ **extensible**: just await plugin's main function in dler config and you're done

## not a tool. a philosophy

each previous package manager had great ideas:
npm's simplicity. yarn's speed. pnpm's structure. bun's ambition.

but none brought it all together.
none felt like **my** dev environment.
none solved the *real* problems i faced every day.

so i built one that did.

`dler` isn't just about installing dependencies.
it's about shipping libraries, bootstrapping projects, publishing to multiple registries, rewriting codebases, and running builds that **just work**.

it's about turning chaos into composability.
it's about making the complex simple.
it's about tools that adapt to you, not the other way around.

## real features. real use cases

👀 building a monorepo with 6 shared libs?
→ `dler libs` handles it. single package.json to publish thousands of packages to npm and jsr.

🚀 want to publish to jsr + npm from one command?
→ `dler pub` and you're done.

📦 tired of bloated bundles?
→ `dler build` with automatic cleanups and optimizations.

🎯 just want to update deps everywhere?
→ `dler update` and it actually works.

🧙 need a custom transformation script?
→ write a spell and make it reusable.

## install it in 10 seconds

```bash
bun add -D @reliverse/dler
```

or download the binary if you prefer native execution.

## 17+ built-in commands

> run `dler` to enter the interactive mode
> run `dler --help` to see all available commands

some highlights:

* `build` — build libraries the smart way
* `pub` — publish to npm/jsr without the headache with automatic package.json generation
* `agg` — aggregate exports from source
* `libs` — manage internal packages
* `spell` — run custom codemods
* `x`, `fs`, `migrate`, `check`, `update`... the list goes on

see [docs](https://github.com/reliverse/dler) for the full list.

## what's next

* full monorepo support with smart linking
* even tighter npm/jsr integrations
* build analysis & visual diffs
* release pipelines with changelog automation
* more spells for common transformations

## conclusion

every package manager i used taught me something.

npm: simplicity matters.
yarn: speed changes everything.
pnpm: structure can be elegant.
bun: ambition drives the ecosystem.

but none of them gave me *all* of what i wanted.
none solved the daily friction i faced.
none felt like they were built for *my* workflow.

so i built `dler`.

a package manager's best friend.
a build system with brains.
a publishing toolkit that doesn't make me cry.
a codemod engine that automates the annoying.
a dev environment that i finally trust.

try it out.
i felt in love with it.

## and hopefully **you will too**

* 🛠 [github.com/reliverse/dler](https://github.com/reliverse/dler)
* ❤️ [sponsor the project](https://github.com/sponsors/blefnk) if it saves you time

thank you nodejs, npm, yarn, pnpm, bun. you're all great. i love you all.
