import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

export interface Position {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

export interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

export const World: React.FC<WorldProps> = ({ globeConfig, data }) => {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    if (globeConfig.initialPosition && globeEl.current) {
      globeEl.current.pointOfView({
        lat: globeConfig.initialPosition.lat,
        lng: globeConfig.initialPosition.lng,
        altitude: 2,
      });
    }
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = globeConfig.autoRotate ?? true;
      globeEl.current.controls().autoRotateSpeed = globeConfig.autoRotateSpeed ?? 0.5;
    }
  }, [globeConfig.initialPosition, globeConfig.autoRotate, globeConfig.autoRotateSpeed]);

  return (
    <div className="w-full h-full min-h-[400px]">
      <Globe
        ref={globeEl}
        globeImageUrl={
          globeConfig.globeColor ? undefined : '//unpkg.com/three-globe/example/img/earth-dark.jpg'
        }
        backgroundColor={globeConfig.globeColor || '#062056'}
        showAtmosphere={globeConfig.showAtmosphere}
        atmosphereColor={globeConfig.atmosphereColor}
        atmosphereAltitude={globeConfig.atmosphereAltitude}
        arcsData={data as Position[]}
        arcColor="color"
        arcDashLength={globeConfig.arcLength || 0.9}
        arcDashGap={0.2}
        arcDashInitialGap={0}
        arcDashAnimateTime={globeConfig.arcTime || 1000}
        arcAltitude="arcAlt"
        arcStroke={2}
        width={800}
        height={400}
      />
    </div>
  );
};
