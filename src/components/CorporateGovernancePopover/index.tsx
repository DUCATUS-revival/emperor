import { FC, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import styles from './CorporateGovernancePopover.module.scss'

interface Props {
  className?: string
  menuItemClick?: () => void
  baseDirection?: boolean
}

export const CorporateGovernancePopover: FC<Props> = ({ menuItemClick, baseDirection = true, className, children }) => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const openPopover = () => setPopoverOpen(true)
  const closePopover = () => {
    menuItemClick && menuItemClick()
    setPopoverOpen(false)
  }

  useOnClickOutside(ref, closePopover)

  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      <span onClick={openPopover}>{children}</span>
      {popoverOpen && (
        <div className={`${styles.popover} ${baseDirection ? styles.popoverDown : styles.popoverUp}`}>
          <NavLink to='/corporate_governance/anti_bribery_policy' onClick={closePopover}>
            Anti-Bribery Policy
          </NavLink>
          <NavLink to='/corporate_governance/code_of_conduct' onClick={closePopover}>
            Code Of Conduct
          </NavLink>
          <NavLink to='/corporate_governance/risk_management_policy' onClick={closePopover}>
            Risk Management Policy
          </NavLink>
          <NavLink to='/corporate_governance/tax_management_policy' onClick={closePopover}>
            Responsible Tax Management Policy
          </NavLink>
        </div>
      )}
    </div>
  )
}
