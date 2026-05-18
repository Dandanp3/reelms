"use client"
import { motion } from "framer-motion"
import Link from "Next/link"
import { useTranslation } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
    const { t } = useTranslation()

    return(
        <section className="relative overflow-hidden">
            {/* Backround */}
            <div className="absolute inset-0">
                <div className="bg-gradient-to-b from-primary/5 via-background to-background"/>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/8 blur-[120px]"/>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-acent"/>
                        <span>Reelms</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg text-muted-foreground text-pretty"
                    >
                        {t("home.heroTitle")}
                    </motion.h1>

                    <motion.p>
                        {t("home.heroSubtitle")}
                    </motion.p>

                    <motion.div>
                        <button>
                            {t("home.getStarted")}
                            <ArrowRight/>
                        </button>
                        <button>
                            {t("home.exploreCommunity")}
                        </button>
                    </motion.div>

                </motion.div>
            </div>


        </section>
    )
}